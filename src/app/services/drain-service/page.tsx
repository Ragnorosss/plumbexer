import Image from "next/image";
import Hero from "@/containers/services/drain-service/hero-section/Hero";
import Basement from "@/containers/services/drain-service/basement/Basement";
import type { Metadata } from "next";
import OtherServices from "@/containers/reused/other-services/OtherServices";
export const metadata: Metadata = {
  title: "Drain service",
  description:
    "Regular drain cleaning is essential for maintaining a healthy and efficient drainage system. Over time, grease, soap scum, hair, and other debris can accumulate inside your pipes, leading to slow drainage and unpleasant odours.\n",
  applicationName: "Clover-plate",
  robots: "index, follow",
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
