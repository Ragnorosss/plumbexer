import Image from "next/image";
import Hero from "@/containers/services/water-service/hero-section/Hero";
import Basement from "@/containers/services/water-service/basement/Basement";
import type { Metadata } from "next";
import OtherServices from "@/containers/reused/other-services/OtherServices";

export const metadata: Metadata = {
  title: "Water service",
  description:
    "Water service is a crucial aspect of any property's infrastructure, providing essential access to clean and reliable water for various purposes. From drinking and cooking to bathing and sanitation, a dependable water service system is essential for the health, safety, and comfort of occupants.",
  applicationName: "Clover-plate",
  robots: "index, follow",
};
export default function WaterPage() {
  return (
    <main>
      <Image
        src={"/images/water-service/water-service-top.png"}
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
      <div className={"water-service__container"}>
        <Hero />
        <Basement />
        <OtherServices />
      </div>
    </main>
  );
}
