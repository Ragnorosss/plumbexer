import Image from "next/image";
import Hero from "@/containers/services/drain-service/hero-section/Hero";
import Basement from "@/containers/services/drain-service/basement/Basement";
import type { Metadata } from "next";
import OtherServices from "@/containers/reused/other-services/OtherServices";

export const metadata: Metadata = {
  title: "Drain service",
  description:
    "Regular drain cleaning is essential for maintaining a healthy and efficient drainage system. Over time, grease, soap scum, hair, and other debris can accumulate inside your pipes, leading to slow drainage and unpleasant odours.\n",
  applicationName: "Plumbexer",
  robots: "index, follow",
  creator:'Clover-plate',
  keywords:[
    'Drain cleaning',
    'Clogged drains',
    'Plumbing services', 
    'Sewer services', 
    'Drainage solutions', 
    'Hydro jetting', 
    'Emergency drain repair', 
    'Drain service"' 
],
  openGraph:{
    title: 'Drain service',
    description:    
    "Regular drain cleaning is essential for maintaining a healthy and efficient drainage system. Over time, grease, soap scum, hair, and other debris can accumulate inside your pipes, leading to slow drainage and unpleasant odours.\n",
    url: 'https://www.plumbexer.com/services/drain-service',
    siteName: 'Plumbexer',
    images: [
      {
        url: 'logo.svg',
        width: 512,
        height: 512,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function DrainPage() {
  return (
    <main>
      <Image
        src={"/images/drain-service/drain-service.png"}
        width={1920}
        height={500}
        priority={true}
        alt="Waterproofing Service"
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
