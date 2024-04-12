"use client";
import { Fragment, useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, MotionStyle } from "framer-motion";
import styles from "./dropdownmenu.module.scss";
import ServicesList from "@/lists/ServicesList";
import Link from "next/link";
import { usePathname } from "next/navigation";
export type { MotionStyle } from "framer-motion";
const DropDownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const rootRef = useRef<HTMLUListElement>(null);
  const buttonRef = useRef<HTMLAnchorElement>(null);
  const toggleMenu = (state = !isOpen) => {
    setIsOpen(state);
  };
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const { target } = event;
      if (
        target instanceof Node &&
        !rootRef.current?.contains(target) &&
        !buttonRef.current?.contains(target)
      ) {
        setIsOpen(!isOpen);
      }
    };
    if (isOpen) {
      window.addEventListener("mousedown", handleClick);
    } else {
      window.removeEventListener("mousedown", handleClick);
    }
  }, [isOpen]);

  const pathname = usePathname();

  return (
    <div style={{ position: "relative" }}>
      <a
        ref={buttonRef}
        className={`${styles.button} ${isOpen || pathname.startsWith("/services/") ? styles.selected : ""}`}
        onClick={() => toggleMenu()}
      >
        Services
      </a>
      <AnimatePresence>
        {isOpen && (
          <motion.ul
            ref={rootRef}
            initial={{ opacity: 0, x: "-30%", y: 48 }}
            animate={{ opacity: 1, x: "-10%", y: 16 }}
            exit={{ opacity: 0, x: "-30%", y: 48 }}
            transition={{ type: "spring" }}
            className={styles.dropdown_menu}
          >
            {ServicesList.map((x, idx) => {
              return (
                <Fragment key={idx}>
                  <li
                    className={`${styles.dropdown_menu__item} ${pathname == x.url ? styles.selected : ""}`}
                  >
                    <Link
                      className={styles.dropdown_menu__item_link}
                      href={x.url}
                      onClick={() => toggleMenu(false)}
                    >
                      {x.name}
                    </Link>
                  </li>
                </Fragment>
              );
            })}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
};

export default DropDownMenu;
