import { Navbar } from "@/components/sections/navbar";
import { Hero } from "@/components/sections/hero";
import { CorporateLogos } from "@/components/sections/corporate-logos";
import { TrustBar } from "@/components/sections/trust-bar";
import { Features } from "@/components/sections/features";
import { Security } from "@/components/sections/security";
import { HowItWorks } from "@/components/sections/how-it-works";
import { Comparison } from "@/components/sections/comparison";
import { Pricing } from "@/components/sections/pricing";
import { Deployment } from "@/components/sections/deployment";
import { CTA } from "@/components/sections/cta";
import { Footer } from "@/components/sections/footer";
import content from "@/lib/content/team";

export default function TeamPage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero content={content.hero} />
        <CorporateLogos />
        <TrustBar items={content.trustItems} />
        <Features content={content.features} />
        <Security content={content.security} />
        <HowItWorks content={content.howItWorks} />
        <Comparison content={content.comparison} />
        <Pricing content={content.pricing} />
        <Deployment content={content.deployment} />
        <CTA content={content.cta} />
      </main>
      <Footer />
    </>
  );
}
