import Image from "next/image";
import Hero from "@/containers/services/water-proofing/hero-section/Hero";
import Basement from "@/containers/services/water-proofing/basement/Basement";
import type { Metadata } from "next";
import OtherServices from "@/containers/reused/other-services/OtherServices";
export const metadata: Metadata = {
  title: "Waterproofing",
  description:
    "Waterproofing is a crucial aspect of any building’s construction and maintenance. It helps protect the structure and its inhabitants from water damage and mold growth.\n",
  robots: "index, follow",
  applicationName: "Plumbexer",
  creator:'Clover-plate',
  keywords: ['waterproofing services', 'basement waterproofing', 'waterproof coatings', 'damp proofing', 'foundation waterproofing', 'commercial waterproofing', 'residential waterproofing'],
  openGraph:{
    title: 'Waterproofing',
    description:    
    "Waterproofing is a crucial aspect of any building’s construction and maintenance. It helps protect the structure and its inhabitants from water damage and mold growth.\n",
    siteName: 'Plumbexer',
    url:'https://www.plumbexer.com/services/water-proofing',
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
};
export default function WaterPage() {
  return (
    <main>
      <Image
        src={"/images/water-proofing/big-service-img.png"}
        width={1920}
        height={500}
        alt="Waterproofing Service"
        priority={true}
        className={"servicesTopImage"}
        style={{
          width: "100%",
          maxWidth: "1920px",
          height: "auto",
          minHeight: 150,
          margin: "auto",
          display: "block",
        }}
      />
      <div className={"waterpage__container"}>
        <Hero />
        <Basement />
        <OtherServices />
      </div>
    </main>
  );
}
