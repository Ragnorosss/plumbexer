import Image from "next/image";
import Hero from "@/containers/services/sump-pump/hero-section/Hero";
import Basement from "@/containers/services/sump-pump/basement/Basement";
import type { Metadata } from "next";
import OtherServices from "@/containers/reused/other-services/OtherServices";
export const metadata: Metadata = {
  title: "Sump pump",
  description:
    "Your sump pump is your first line of defense against basement flooding. A costly basement flood can happen any time — if you suspect a problem with your sump pump, don’t delay in getting it looked at!",
  applicationName: "Plumbexer",
  creator:'Clover-plate',
  keywords:['sump pump installation', 'basement waterproofing', 'flood prevention', 'sump pump repair', 'water drainage solutions', 'submersible pumps', 'sump pump maintenance'],
  robots: "index, follow",
  openGraph:{
    title: 'Sump pump',
    description: `
    Your sump pump is your first line of defense against basement flooding. A costly basement flood can happen any time — if you suspect a problem with your sump pump, don’t delay in getting it looked at!`,
    url: 'https://www.plumbexer.com/services/sump-pump',
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
export default function SumpPage() {
  return (
    <main>
      <Image
        src={"/images/sump/sump-top.png"}
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
