import Link from "next/link";
import HeaderButton from "@/components/Header/HeaderButton/HeaderButton";
import HeaderBurger from "@/components/Header/HeaderBurger/HeaderBurger";
import styles from "./Header.module.scss";
import { LogoIcon } from "@/components/Icon/Icon";
import { FC } from "react";
import DropDownMenu from "@/components/DropDownMenu/DropDownMenu";

interface HeaderProps {}

const Header: FC<HeaderProps> = ({}) => {
  return (
    <header className={styles.header}>
      <div className={"header__container"}>
        <div className={styles.header__wrapper}>
          <div className={styles.header__logo}>
            <Link href={"/"} className={styles.header__logo_item}>
              <LogoIcon />
              <div>
                <h1 className={styles.header__logo_item_title}>plumbexer</h1>
                <h2 className={styles.header__logo_item_subtitle}>
                  plumbing services
                </h2>
              </div>
            </Link>
          </div>
          <nav className={styles.header__links}>
            <ul className={styles.header__links_menu}>
              <li>
                <HeaderButton href={"/"}>Home</HeaderButton>
              </li>
              <li>
                <DropDownMenu />
              </li>
              <li>
                <HeaderButton href={"/contact-us"}>Contact us</HeaderButton>
              </li>
            </ul>
            <a className={styles.header__links_phone} href={"tel:+14375565332"}>
              +1 437 556 5332
            </a>
          </nav>
          <HeaderBurger />
        </div>
      </div>
    </header>
  );
};

export default Header;
