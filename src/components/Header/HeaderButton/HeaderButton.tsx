"use client";

import { FC } from "react";
import styles from "./HeaderButton.module.scss";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface HeaderButtonProps {
  children: string;
  href: string;
}

const HeaderButton: FC<HeaderButtonProps> = ({
  children,
  href,
}: HeaderButtonProps) => {
  const pathname = usePathname();

  return (
    <Link
      href={href ?? ""}
      className={
        styles.button + (href && pathname === href ? ` ${styles.selected}` : "")
      }
    >
      {children}
    </Link>
  );
};
export default HeaderButton;
