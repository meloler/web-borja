import { Hero } from "@/components/sections/hero";
import { SocialProof } from "@/components/sections/social-proof";
import { ParaQuien } from "@/components/sections/para-quien";
import { HowItWorks } from "@/components/sections/how-it-works";
import { Pricing } from "@/components/sections/pricing";
import { About } from "@/components/sections/about";
import { Locations } from "@/components/sections/locations";
import { Faq } from "@/components/sections/faq";
import { CtaFinal } from "@/components/sections/cta-final";

export default function HomePage() {
  return (
    <>
      <Hero />
      <SocialProof />
      <ParaQuien />
      <HowItWorks />
      <Pricing />
      <About />
      <Locations />
      <Faq />
      <CtaFinal />
    </>
  );
}
