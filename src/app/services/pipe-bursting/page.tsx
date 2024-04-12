import Image from "next/image";
import Hero from "@/containers/services/pipe-bursting/hero-section/Hero";
import Basement from "@/containers/services/pipe-bursting/basement/Basement";
import type { Metadata } from "next";
import OtherServices from "@/containers/reused/other-services/OtherServices";
export const metadata: Metadata = {
  title: "Pipe bursting",
  description:
    'n the realm of plumbing services, innovations are constantly evolving to offer more efficient and less invasive solutions. One such advancement is "pipe bursting," a trenchless method revolutionizing the way pipelines are replaced. If you\'re facing issues with your underground pipelines, understanding pipe bursting could help you make informed decisions when seeking plumbing services.',
  applicationName: "Clover-plate",
};
export default function PipePage() {
  return (
    <main>
      <Image
        src={"/images/pipe/pipe_top.png"}
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
