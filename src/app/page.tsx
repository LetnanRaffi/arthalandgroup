import { CtaBanner } from "@/components/CtaBanner";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Products } from "@/components/Products";
import { Stats } from "@/components/Stats";
import { Units } from "@/components/Units";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Units />
        <Products />
        <Stats />
        <CtaBanner />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
