import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "../styles/globals.scss";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Plumbexer | Home",
  description:
    "With us, you're not just hiring a plumber; you're entrusting your home or business to seasoned professionals committed " +
    "to excellence. Our experience ensures reliable solutions tailored to your needs. Equipped with the latest tools, we approach " +
    "each project with precision and efficiency. From minor repairs to major installations, our services have you covered. " +
    "Choose us for reliability, expertise, and peace of mind.",
  applicationName: "Clover-plate",
  robots: "index, follow",
  icons: [
    {
      url: `./favicon.ico`,
      rel: "icon",
      type: "image/x",
      sizes: "any",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <div className={"wrapper"}>
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
