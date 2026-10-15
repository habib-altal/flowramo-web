"use client";

import { createContext, useCallback, useContext, useEffect, useId, useRef, useState } from "react";
import { X, Check } from "lucide-react";
import { SUPABASE_PUBLISHABLE_KEY, SUPABASE_URL } from "@/lib/config";
import { fill, useI18n } from "./I18n";

type DemoCtx = { open: () => void };
const Ctx = createContext<DemoCtx>({ open: () => {} });

export function useDemo() {
  return useContext(Ctx);
}

type Status = "idle" | "sending" | "sent" | "error";

export function DemoProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setOpen] = useState(false);
  const open = useCallback(() => setOpen(true), []);
  return (
    <Ctx.Provider value={{ open }}>
      {children}
      {isOpen && <DemoModal onClose={() => setOpen(false)} />}
    </Ctx.Provider>
  );
}

function DemoModal({ onClose }: { onClose: () => void }) {
  const { t, locale } = useI18n();
  const d = t.demo;
  const [status, setStatus] = useState<Status>("idle");
  const [name, setName] = useState("");
  const dialogRef = useRef<HTMLDivElement>(null);
  const titleId = useId();

  useEffect(() => {
    const lenis = (window as unknown as { __lenis?: { stop: () => void; start: () => void } }).__lenis;
    lenis?.stop();
    const prev = document.activeElement as HTMLElement | null;
    dialogRef.current?.querySelector<HTMLInputElement>("input")?.focus();
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => {
      lenis?.start();
      window.removeEventListener("keydown", onKey);
      prev?.focus();
    };
  }, [onClose]);

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const payload = {
      doctor_name: String(data.get("doctor_name") ?? "").trim().slice(0, 120),
      clinic_name: String(data.get("clinic_name") ?? "").trim().slice(0, 160),
      whatsapp: String(data.get("whatsapp") ?? "").trim().slice(0, 40),
      country: String(data.get("country") ?? "").trim().slice(0, 80),
      email: String(data.get("email") ?? "").trim().slice(0, 160) || null,
      source: "website",
      language: locale,
    };
    setName(payload.doctor_name.split(" ").filter(Boolean)[0] ?? "");
    // Honeypot: people never see this field; bots fill it.
    if (String(data.get("hp_note") ?? "")) {
      setStatus("sent");
      return;
    }
    setStatus("sending");
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
    } catch {
      setStatus("error");
    }
  }

  const field =
    "h-12 w-full rounded-xl border border-line bg-card px-4 text-[15.5px] outline-none transition-colors placeholder:text-ink-3 focus:border-blue focus-visible:ring-4 focus-visible:ring-blue/15";
  const label = "flex flex-col gap-1.5 text-[13.5px] font-medium text-ink-2";

  return (
    <div className="fixed inset-0 z-[100] flex items-end justify-center sm:items-center" role="presentation">
      <button aria-label={d.close} className="absolute inset-0 cursor-default bg-ink/30 backdrop-blur-[3px]" onClick={onClose} />
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className="relative m-0 w-full max-w-[520px] rounded-t-[28px] bg-paper p-6 shadow-[0_30px_80px_-20px_rgba(12,12,11,0.35)] sm:m-4 sm:rounded-[28px] sm:p-8"
        data-lenis-prevent
      >
        <button
          onClick={onClose}
          aria-label={d.close}
          className="absolute end-4 top-4 grid h-10 w-10 place-items-center rounded-full text-ink-2 transition-colors hover:bg-paper-2 hover:text-ink"
        >
          <X size={18} />
        </button>

        {status === "sent" ? (
          <div className="flex flex-col items-start gap-4 py-6">
            <span className="grid h-11 w-11 place-items-center rounded-full bg-blue text-white">
              <Check size={20} />
            </span>
            <h2 id={titleId} className="text-[28px] font-[580] leading-tight tracking-[-0.03em]">
              {name ? fill(d.thanks, { name }) : d.thanksAnon}
            </h2>
            <p className="text-ink-2">{d.thanksSub}</p>
            <button onClick={onClose} className="btn btn-ink mt-2">
              {d.done}
            </button>
          </div>
        ) : (
          <form method="post" onSubmit={submit} className="flex flex-col gap-5">
            <div className="pe-10">
              <h2 id={titleId} className="text-[30px] font-[580] leading-[1.05] tracking-[-0.035em]">
                {d.title}
              </h2>
              <p className="mt-2 text-ink-2">{d.sub}</p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              <label className={label}>
                {d.name}
                <input id="demo-name" name="doctor_name" required autoComplete="name" maxLength={120} className={field} placeholder={d.namePh} />
              </label>
              <label className={label}>
                {d.clinic}
                <input id="demo-clinic" name="clinic_name" required autoComplete="organization" maxLength={160} className={field} placeholder={d.clinicPh} />
              </label>
              <label className={label}>
                {d.whatsapp}
                <input
                  id="demo-whatsapp"
                  name="whatsapp"
                  required
                  type="tel"
                  inputMode="tel"
                  dir="ltr"
                  autoComplete="tel"
                  maxLength={40}
                  pattern="[+0-9 \(\)\-]{7,40}"
                  className={`${field} text-start`}
                  placeholder={d.whatsappPh}
                />
              </label>
              <label className={label}>
                {d.country}
                <input id="demo-country" name="country" required autoComplete="country-name" maxLength={80} className={field} placeholder={d.countryPh} />
              </label>
              <label className={`${label} sm:col-span-2`}>
                <span>
                  {d.email} <span className="sr-only">{d.optional}</span>
                </span>
                <input id="demo-email" name="email" type="email" dir="ltr" autoComplete="email" maxLength={160} className={`${field} text-start`} placeholder={d.emailPh} />
              </label>
              <label className="sr-only" aria-hidden="true">
                Leave empty
                <input name="hp_note" tabIndex={-1} autoComplete="off" />
              </label>
            </div>
            {status === "error" && (
              <p role="alert" className="rounded-xl bg-alert-soft px-4 py-3 text-[14.5px] text-alert">
                {d.error}
              </p>
            )}
            <button type="submit" disabled={status === "sending"} className="btn btn-ink h-[52px] w-full disabled:opacity-60">
              {status === "sending" ? d.sending : d.submit}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

export function DemoButton({ className = "btn btn-ink", children }: { className?: string; children?: React.ReactNode }) {
  const { open } = useDemo();
  const { t } = useI18n();
  return (
    <button type="button" onClick={open} className={className}>
      {children ?? t.nav.demo}
    </button>
  );
}
