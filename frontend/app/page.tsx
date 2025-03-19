import { Blog2 } from "@/components/custom/blog-section";
import { Case2 } from "@/components/custom/case-section";
import { CTA1 } from "@/components/custom/contact-section";
import { Contact1 } from "@/components/custom/contact-us-section";
import { FAQ2 } from "@/components/custom/faq-section";
import { Feature2 } from "@/components/custom/features-section";
import { Footer1 } from "@/components/custom/footer-section";
import { Hero5 } from "@/components/custom/hero-section";
import { Header1 } from "@/components/custom/navigation-bar";
import { Pricing2 } from "@/components/custom/pricing-section";
import { Testimonials1 } from "@/components/custom/tursted-by-section";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div>
      <Header1/>
      <Hero5/>
      <Case2/>
      <Testimonials1/>
      <Feature2/>
      <Pricing2/>
      <CTA1/>
      <Blog2/>
      <FAQ2/>
      <Contact1/>
      <Footer1/>
    </div>
  );
}
