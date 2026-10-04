import { Nav } from "@/components/Nav";
import { SmoothScroll } from "@/components/SmoothScroll";
import { DemoProvider } from "@/components/Demo";
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
import { Closing } from "@/components/sections/Closing";

export default function Home() {
  return (
    <DemoProvider>
      <SmoothScroll />
      <Nav />
      <main id="top">
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
        <Closing />
      </main>
    </DemoProvider>
  );
}
