import styles from "./footer.module.scss";
import Link from "next/link";
import { FooterLogo } from "@/components/Icon/Icon";
export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={"footer__container"}>
        <div className={styles.footer__wrapper}>
          <div className={styles.footer__logo}>
            <div className={styles.footer__logo_image}>
              <Link href={"/"} className={styles.footer__logo_image_item}>
                <FooterLogo />
                <div>
                  <h1 className={styles.footer__logo_image_item_title}>
                    plumbexer
                  </h1>
                  <h2 className={styles.footer__logo_image_item_subtitle}>
                    plumbing services
                  </h2>
                </div>
              </Link>
            </div>
            <p className={styles.footer__logo_copyright}>
              <Link href={"/privacy-policy"}>
                ⓒ Plumbexer all rights reserved | Privacy Policy
              </Link>
            </p>
          </div>
          <div className={styles.footer__lists}>
            <ul className={styles.footer__lists_list}>
              <li>
                <Link href={"/services/underpinning"}>Underpinning</Link>
              </li>
              <li>
                <Link href={"/services/water-proofing"}>Waterproofing</Link>
              </li>
              <li>
                <Link href={"/services/sump-pump"}>Sump pump</Link>
              </li>
            </ul>
            <ul>
              <li>
                <Link href={"/services/water-service"}>Water service</Link>
              </li>
              <li>
                <Link href={"/services/drain-service"}>Drain service</Link>
              </li>
              <li>
                <Link href={"/services/pipe-bursting"}>Pipe bursting</Link>
              </li>
            </ul>
            <ul>
              <li>
                <a href={"tel:+14375565332"}>+1 437 556 5332</a>
              </li>
              <li>
                <a href={"mailto:plumbexer@gmail.com"}>plumbexer@gmail.com</a>
              </li>
            </ul>
          </div>
          <p className={styles.footer__copyright}>
            <Link href={"/privacy-policy"}>
              ⓒ Plumbexer all rights reserved | Privacy Policy
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
