import Image from "next/image";
import Hero from "@/app/components/layout/Hero";
import HeroMenu from "@/app/components/layout/HeroMenu";
import AboutUs from "@/app/components/AboutUs";
import ContactUs from "@/app/components/ContactUs";

export default function Home() {
  return (
    <main>
        <Hero />
        <HeroMenu />
        <AboutUs />
        <ContactUs />
    </main>
  );
}
