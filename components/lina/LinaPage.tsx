import type { Locale } from "@/lib/i18n";
import { getCommon, getLina } from "@/content/dictionaries";
import { JsonLd, linaSchema } from "@/lib/schema";
import { PageDictProvider } from "../PageDict";
import { Faq } from "../Faq";
import { Hero } from "./Hero";
import { Journey } from "./Journey";
import { MessageBridge } from "./MessageBridge";
import { LinaMoment } from "./LinaMoment";
import { WatchLina } from "./WatchLina";
import { Lifecycle } from "./Lifecycle";
import { Recovery } from "./Recovery";
import { ProductReveal } from "./ProductReveal";
import { WhileAway } from "./WhileAway";
import { Multilingual } from "./Multilingual";
import { Integrations } from "./Integrations";
import { HumanAI } from "./HumanAI";
import { Testimonials } from "./Testimonials";
import { AtAGlance } from "./AtAGlance";
import { ClinicGuides } from "./ClinicGuides";
import { Closing } from "./Closing";
import { TryLinaBar } from "./TryLinaBar";

/** The Lina product story, unchanged from the original home page. */
export function LinaPage({ lang }: { lang: Locale }) {
  const t = getLina(lang);
  return (
    <PageDictProvider value={t}>
      <main id="main">
        <JsonLd data={linaSchema(lang, t, getCommon(lang))} />
        <Hero />
        <Journey />
        <MessageBridge />
        <LinaMoment />
        <WatchLina />
        <Lifecycle />
        <Recovery />
        <ProductReveal />
        <WhileAway />
        <Multilingual />
        <Integrations />
        <HumanAI />
        <Testimonials />
        <AtAGlance t={t.glance} lang={lang} />
        <ClinicGuides h2={t.guides.h2} lang={lang} />
        <Faq t={t.faq} />
        <Closing />
        <TryLinaBar />
      </main>
    </PageDictProvider>
  );
}
