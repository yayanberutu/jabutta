import EventSection from "@/components/EventSection";
import FloatingWhatsAppButton from "@/components/FloatingWhatsAppButton";
import Footer from "@/components/Footer";
import GallerySection from "@/components/GallerySection";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import OrderStepsSection from "@/components/OrderStepsSection";
import ProductSection from "@/components/ProductSection";
import WhyJabuttaSection from "@/components/WhyJabuttaSection";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <ProductSection />
        <EventSection />
        <WhyJabuttaSection />
        <GallerySection />
        <OrderStepsSection />
      </main>
      <Footer />
      <FloatingWhatsAppButton />
    </>
  );
}
