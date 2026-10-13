import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { hasLocale } from "@/lib/i18n";
import { pageMetadata } from "@/lib/meta";
import { getCommon, getHome, getPages } from "@/content/dictionaries";
import { JsonLd, pageSchema } from "@/lib/schema";
import { ContactForm } from "@/components/pages/ContactForm";
import { TryLinaLink } from "@/components/lina/TryLina";

export async function generateMetadata({ params }: PageProps<"/[lang]/contact">): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const m = getPages(lang).contact.meta;
  return pageMetadata(lang, "/contact", m.title, m.description);
}

export default async function ContactPage({ params }: PageProps<"/[lang]/contact">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const common = getCommon(lang);
  const c = getPages(lang).contact;
  const patient = getHome(lang).lina.chat.patient;

  return (
    <main id="main">
      <JsonLd data={pageSchema(lang, common, "/contact", c.meta.title, c.meta.description, "ContactPage")} />
      <div className="wrap grid gap-14 pb-[clamp(96px,12vw,160px)] pt-[clamp(132px,13vw,184px)] lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-20">
        <div>
          <h1 className="display-md">{c.h1}</h1>
          <p className="lede mt-7 max-w-[30rem]">{c.sub}</p>

          <h2 className="mt-14 text-[15px] font-semibold">{c.next.h2}</h2>
          <ol className="mt-5 flex flex-col gap-4">
            {c.next.steps.map((s, i) => (
              <li key={s} className="flex items-start gap-4 text-[16px] leading-[1.55] text-ink-2">
                <span className="grid h-7 w-7 flex-none place-items-center rounded-full border-[1.5px] border-blue text-[12.5px] font-semibold tabular-nums text-blue" aria-hidden="true">
                  {i + 1}
                </span>
                <span className="pt-0.5">{s}</span>
              </li>
            ))}
          </ol>

          <div className="mt-14 flex flex-col gap-5 border-t border-line pt-8 text-[15px]">
            <p className="text-ink-2">
              {c.direct}{" "}
              <a href={`mailto:${common.footer.email}`} dir="ltr" className="font-medium text-ink underline decoration-line-strong underline-offset-4 hover:decoration-ink">
                {common.footer.email}
              </a>
            </p>
            <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-ink-2">
              {c.tryLina}
              <TryLinaLink message={patient} source="contact" className="inline-flex items-center gap-1.5 font-medium text-ink underline decoration-line-strong underline-offset-4 hover:decoration-ink">
                {c.tryLinaCta}
              </TryLinaLink>
            </div>
          </div>
        </div>

        <div className="lg:pt-3">
          <ContactForm f={c.form} />
        </div>
      </div>
    </main>
  );
}
