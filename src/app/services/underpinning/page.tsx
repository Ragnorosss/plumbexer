import Image from "next/image";
import Hero from "@/containers/services/underpinning/hero-section/Hero";
import Basement from "@/containers/services/underpinning/basement/Basement";
import type { Metadata } from "next";
import OtherServices from "@/containers/reused/other-services/OtherServices";
export const metadata: Metadata = {
  title: "Underpinning",
  description:
    "Underpinning s strengthening or reinforcing the foundation of an existing building of structure. It is typically done when the existing foundation is no longer firm enough to support the building's weight or when the soil conditions have changed so the foundation is no longer stable.\n",
  keywords: ["Underpinning", "services"],
  robots: "index, follow",
  applicationName: "Clover-plate",
};
export default function UnderPiningPage() {
  return (
    <main>
      <Image
        src={"/images/underpinning/underpinning-top.png"}
        width={1920}
        height={500}
        alt="Waterproofing Service"
        className={"servicesTopImage"}
        priority={true}
        style={{
          width: "100%",
          maxWidth: "1920px",
          height: "auto",
          maxHeight: 500,
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
