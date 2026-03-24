import Hero from "@/components/Hero";
import About from "@/components/About";
import Transformations from "@/components/Transformations";
import Programs from "@/components/Programs";
import MediaPreview from "@/components/MediaPreview";
import Marquee from "@/components/Marquee";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Studios from "@/components/Studios";
import PreFooter from "@/components/PreFooter";
import Footer from "@/components/Footer";
import EmotionalCTA from "@/components/EmotionalCTA";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-white selection:text-black">
      {/* Hero Section */}
      <Hero />

      {/* Brand Marquee for brand continuity */}
      <Marquee />

      {/* About Section - The Philosophy */}
      <About />

      {/* Programs Section - The Action */}
      <Programs />

      {/* Transformations Section - The Proof */}
      <Transformations />

      {/* Emotional Positioning CTA - High Conversion Hook */}
      <EmotionalCTA />

      {/* Media Coverage - Authority & Credibility */}
      <MediaPreview />

      {/* Testimonials Section - Social Proof */}
      <Testimonials />

      {/* Contact Section - The Transformation Start */}
      <Contact />

      {/* Studios Section - Physical Locations */}
      <Studios />

      {/* Pre-Footer Section - Conversion & Quick Links */}
      <PreFooter />

      {/* Final Brand Footer Bar */}
      <Footer />

    </main>
  );
}
