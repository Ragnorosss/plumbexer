import styles from "./page.module.scss";
import HeroSection from "@/containers/home-page/hero-section/Hero";
import OurServicesSection from "@/containers/reused/our-services/OurServices";
import WhyChooseUsSection from "@/containers/home-page/why-section/WhyChooseUs";
import ContactSection from "@/containers/home-page/contact-section/Contact";

export default function Home() {
  return (
    <main className={styles.main}>
      <HeroSection />
      <OurServicesSection />
      <WhyChooseUsSection />
      <ContactSection />
    </main>
  );
}
