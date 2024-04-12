"use client";
import styles from "@/components/Header/HeaderBurger/HeaderBurger.module.scss";
import { FC, useState } from "react";
import { motion, useCycle, AnimatePresence } from "framer-motion";
import HeaderButton from "@/components/Header/HeaderButton/HeaderButton";
import DropDownMenu from "@/components/DropDownMenu/DropDownMenu";
import Link from "next/link";
import { FooterLogo } from "@/components/Icon/Icon";
import { textAnimation } from "@/components/TextAnimation/TextAnimation";
import BurgerDropDown from "@/components/Header/BurgerDropDown/BurgerDropDown";
interface HeaderBurgerProps {}

const HeaderBurger: FC<HeaderBurgerProps> = ({}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <>
      <motion.button
        className={styles.header__burger}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className={styles["header__burger_stick--top"]}></div>
        <div className={styles["header__burger_stick--bottom"]}></div>
      </motion.button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className={styles.header__burger_wrapper}
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: "0%" }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "tween" }}
          >
            <motion.div
              className={styles.header__burger_wrapper_logo}
              initial={{ opacity: 0, y: "0%" }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, y: "100%" }}
              transition={{ delay: 0, type: "tween" }}
            >
              <Link
                href={"/"}
                className={styles.header__burger__logo_image_item}
              >
                <FooterLogo />
                <div>
                  <h1 className={styles.header__burger_image_item_title}>
                    plumbexer
                  </h1>
                  <h2 className={styles.header__burger_image_item_subtitle}>
                    plumbing services
                  </h2>
                </div>
              </Link>
              <motion.button
                onClick={() => setIsOpen(!isOpen)}
                className={styles.header__burger_close}
              >
                x
              </motion.button>
            </motion.div>
            <motion.ul className={styles.header__burger__links_menu}>
              <li>
                <HeaderButton href={"/"}>Home</HeaderButton>
              </li>
              <li>
                <BurgerDropDown />
              </li>
              <li>
                <HeaderButton href={"/contact-us"}>Contact us</HeaderButton>
              </li>
            </motion.ul>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 20,
                marginTop: 20,
              }}
            >
              <a
                className={styles.header__links_phone}
                href={"tel:+1234567890"}
              >
                123-456-7890
              </a>
              <a
                className={styles.header__links_phone}
                href={"mailto: mail@mail.com"}
              >
                mail@mail.com
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
export default HeaderBurger;
