import styles from "./page.module.scss";
import OurServices from "@/containers/reused/our-services/OurServices";
import Image from "next/image";
import ContactSection from "@/containers/contact-us/contact-section/Contact";
export default function ContactPage() {
  return (
    <main className={styles.main}>
      <Image
        width={1000}
        height={156}
        src={"/images/contact-us-background.svg"}
        alt={"bg"}
        className={styles.background}
      />
      <ContactSection />
      <OurServices />
    </main>
  );
}
