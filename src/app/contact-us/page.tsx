import styles from "./page.module.scss";
import OurServices from "@/containers/reused/our-services/OurServices";
import Image from "next/image";
import ContactSection from "@/containers/contact-us/contact-section/Contact";
import type { Metadata } from 'next';
export const metadata: Metadata = {
  title:'Plumbexer | Contacts',
  description:`Contact us
  Let's discuss your next project!
  We ask all prospective clients to start by booking a free consultation with us so we can chat about your project and help you with services`,
  keywords:['+1 437 556 5332 - Plumbexer', 'plumbexer@gmail.com - Plumbexer', 'Canada Toronto Oshawa'],
  openGraph:{
    title: 'Plumbexer | Contacts',
    description:`Contact us
    Let's discuss your next project!
    We ask all prospective clients to start by booking a free consultation with us so we can chat about your project and help you with services`,
    url: 'https://www.plumbexer.com/contact-us',
    siteName: 'Plumbexer',
    images: [
      {
        url: './../../public/logo.svg',
        width: 512,
        height: 512,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
}
 
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
