import { notFound } from "next/navigation";
import { hasLocale } from "@/lib/i18n";
import { getDictionary } from "@/content/dictionaries";
import { JsonLd, homeSchema } from "@/lib/schema";
import { Hero } from "@/components/sections/Hero";
import { Journey } from "@/components/sections/Journey";
import { MessageBridge } from "@/components/sections/MessageBridge";
import { LinaMoment } from "@/components/sections/LinaMoment";
import { WatchLina } from "@/components/sections/WatchLina";
import { Lifecycle } from "@/components/sections/Lifecycle";
import { Recovery } from "@/components/sections/Recovery";
import { ProductReveal } from "@/components/sections/ProductReveal";
import { WhileAway } from "@/components/sections/WhileAway";
import { Multilingual } from "@/components/sections/Multilingual";
import { Integrations } from "@/components/sections/Integrations";
import { HumanAI } from "@/components/sections/HumanAI";
import { Testimonials } from "@/components/sections/Testimonials";
import { Faq } from "@/components/sections/Faq";
import { Closing } from "@/components/sections/Closing";

export default async function Home({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const t = getDictionary(lang);
  return (
    <main id="top">
      <JsonLd data={homeSchema(lang, t)} />
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
      <Faq t={t.faq} />
      <Closing />
    </main>
  );
}
