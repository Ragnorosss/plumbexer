import { Fragment, useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import styles from "./burger-drop-down.module.scss";
import { AnimatePresence, motion } from "framer-motion";
import ServicesList from "@/lists/ServicesList";
import Link from "next/link";

function BurgerDropDown() {
  const [isOpen, setIsOpen] = useState(false);
  const rootRef = useRef<HTMLUListElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
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
      <button
        ref={buttonRef}
        className={`${styles.button} ${isOpen || pathname.startsWith("/services/") ? styles.selected : ""}`}
        onClick={() => toggleMenu()}
        style={{ fontWeight: 600 }}
      >
        Services
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.ul
            ref={rootRef}
            initial={{ opacity: 0, x: 5, y: 58 }}
            animate={{ opacity: 1, x: 5, y: 15 }}
            exit={{
              opacity: 0,
              x: 5,
              y: -15,
              transition: { delay: 0.2, duration: 0.3 },
            }}
            transition={{ type: "spring", delay: 0.3 }}
            style={{
              height: "auto",
              listStyle: "none",
            }}
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
}

export default BurgerDropDown;
