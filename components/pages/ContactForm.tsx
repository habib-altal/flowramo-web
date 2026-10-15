"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Check } from "lucide-react";
import { track } from "@vercel/analytics";
import { SUPABASE_PUBLISHABLE_KEY, SUPABASE_URL } from "@/lib/config";
import type { PagesDict } from "@/content/dictionaries/en/pages";
import { fill, useI18n } from "../I18n";

type Status = "idle" | "sending" | "sent" | "error";

/*
  Writes to Supabase `website_leads` with the public key (RLS allows anon INSERT only).
  A database trigger then alerts Habib (n8n "Flowramo — Website Lead Alert").
*/
export function ContactForm({ f, intent: initialIntent }: { f: PagesDict["contact"]["form"]; intent?: string }) {
  const { locale } = useI18n();
  const [status, setStatus] = useState<Status>("idle");
  // Until the script runs, a submit would be a native GET that puts the lead in the URL; keep the button off till then.
  const [ready, setReady] = useState(false);
  useEffect(() => setReady(true), []);
  const [name, setName] = useState("");
  const [intent, setIntent] = useState(f.intents.some((i) => i.id === initialIntent) ? initialIntent! : "");

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const first = String(data.get("name") ?? "").trim().split(/\s+/)[0] ?? "";
    setName(first);
    // Honeypot: people never see this field; bots fill it.
    if (String(data.get("hp_note") ?? "")) {
      setStatus("sent");
      return;
    }
    setStatus("sending");
    const payload = {
      doctor_name: String(data.get("name") ?? "").trim().slice(0, 120),
      clinic_name: String(data.get("company") ?? "").trim().slice(0, 160),
      whatsapp: String(data.get("whatsapp") ?? "").trim().slice(0, 40),
      country: String(data.get("country") ?? "").trim().slice(0, 80),
      email: String(data.get("email") ?? "").trim().slice(0, 160) || null,
      source: `contact:${intent || "unsure"}`,
      intent: intent || "unsure",
      message: String(data.get("message") ?? "").trim().slice(0, 2000) || null,
      language: locale,
    };
    try {
      const res = await fetch(`${SUPABASE_URL}/rest/v1/website_leads`, {
        method: "POST",
        headers: {
          apikey: SUPABASE_PUBLISHABLE_KEY,
          Authorization: `Bearer ${SUPABASE_PUBLISHABLE_KEY}`,
          "Content-Type": "application/json",
          Prefer: "return=minimal",
        },
        body: JSON.stringify(payload),
      });
      setStatus(res.ok ? "sent" : "error");
      if (res.ok) track("contact_submitted", { locale, intent: intent || "unsure" });
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="rounded-[28px] border border-line bg-card p-8 sm:p-10" role="status">
        <span className="grid h-11 w-11 place-items-center rounded-full bg-blue text-white" aria-hidden="true">
          <Check size={20} strokeWidth={2.5} />
        </span>
        <p className="mt-6 text-[clamp(1.4rem,2.2vw,1.9rem)] font-[560] leading-tight tracking-[-0.025em]">{name ? fill(f.thanks, { name }) : f.thanksAnon}</p>
        <p className="mt-3 text-[16px] leading-[1.6] text-ink-2">{f.thanksSub}</p>
      </div>
    );
  }

  const field = "mt-2 block h-12 w-full rounded-2xl border border-line bg-card px-4 text-[16px] text-ink outline-none transition-colors placeholder:text-ink-3 focus:border-blue focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue/15";
  const label = "text-[14px] font-medium text-ink";

  return (
    <form method="post" onSubmit={submit} className="rounded-[28px] border border-line bg-card p-6 sm:p-9" noValidate={false}>
      <fieldset>
        <legend className={label}>{f.intent}</legend>
        <div className="mt-3 flex flex-wrap gap-2">
          {f.intents.map((i) => (
            <label key={i.id} className="cursor-pointer">
              <input type="radio" name="intent" value={i.id} checked={intent === i.id} onChange={() => setIntent(i.id)} className="peer sr-only" />
              <span className="chip h-9 px-3.5 text-[14px] text-ink-2 transition-colors hover:border-ink-3 peer-checked:border-blue peer-checked:bg-blue-soft peer-checked:text-blue-deep peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-blue">
                {i.label}
              </span>
            </label>
          ))}
        </div>
      </fieldset>

      <div className="mt-8 grid gap-5 sm:grid-cols-2">
        <label className="block">
          <span className={label}>{f.name}</span>
          <input name="name" required autoComplete="name" maxLength={120} placeholder={f.namePh} className={field} />
        </label>
        <label className="block">
          <span className={label}>{f.company}</span>
          <input name="company" required autoComplete="organization" maxLength={160} placeholder={f.companyPh} className={field} />
        </label>
        <label className="block">
          <span className={label}>{f.whatsapp}</span>
          <input name="whatsapp" required type="tel" inputMode="tel" autoComplete="tel" maxLength={40} pattern="[+0-9 \(\)\-]{7,40}" placeholder={f.whatsappPh} dir="ltr" className={`${field} text-start rtl:text-end`} />
        </label>
        <label className="block">
          <span className={label}>{f.country}</span>
          <input name="country" required autoComplete="country-name" maxLength={80} placeholder={f.countryPh} className={field} />
        </label>
        <label className="block sm:col-span-2">
          <span className={label}>
            {f.email} <span className="font-normal text-ink-3">{f.optional}</span>
          </span>
          <input name="email" type="email" autoComplete="email" maxLength={160} placeholder={f.emailPh} dir="ltr" className={`${field} text-start rtl:text-end`} />
        </label>
        <label className="block sm:col-span-2">
          <span className={label}>
            {f.message} <span className="font-normal text-ink-3">{f.optional}</span>
          </span>
          <textarea
            name="message"
            rows={4}
            maxLength={2000}
            placeholder={f.messagePh}
            className="mt-2 block w-full resize-y rounded-2xl border border-line bg-card px-4 py-3 text-[16px] leading-[1.55] text-ink outline-none transition-colors placeholder:text-ink-3 focus:border-blue"
          />
        </label>
        <label className="absolute -start-[9999px] h-px w-px overflow-hidden" aria-hidden="true">
          Leave empty
          <input name="hp_note" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      {status === "error" && (
        <p className="mt-6 rounded-2xl bg-alert-soft px-4 py-3 text-[14.5px] text-alert" role="alert">
          {f.error}
        </p>
      )}

      <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-[13.5px] leading-[1.5] text-ink-3">
          {f.consent}{" "}
          <Link href={`/${locale}/privacy`} className="underline decoration-line-strong underline-offset-[3px] hover:text-ink">
            {f.privacy}
          </Link>
        </p>
        <button type="submit" disabled={!ready || status === "sending"} className="btn btn-ink flex-none disabled:opacity-60">
          {status === "sending" ? f.sending : f.submit}
        </button>
      </div>
    </form>
  );
}
