"use client";

import { FC } from "react";
import { ServiceType } from "@/types/ServiceCard";
import Link from "next/link";
import Image from "next/image";
import styles from "./ServiceCard.module.scss";
import { ArrowTopRight } from "@/components/Icon/Icon";
import { motion } from "framer-motion";

interface ServiceCardProps {
  card: ServiceType;
  delay: number;
}

const cardAnimation = {
  hidden: {
    y: -24,
    opacity: 0,
  },
  visible: (custom: number) => ({
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      delay: custom,
    },
  }),
};

const ServiceCard: FC<ServiceCardProps> = ({ card, delay = 0 }) => {
  return (
    <motion.li
      custom={delay}
      variants={cardAnimation}
      className={styles.serviceCard}
      whileHover={{
        scale: 1.05,
        transition: { type: "spring", mass: 0.5, stiffness: 500 },
      }}
    >
      <Link className={styles.serviceCard__wrapper} href={card.url}>
        <Image
          className={styles.serviceCard__wrapper_image}
          src={card.image}
          alt={card.name}
          height={512}
          width={512}
          loading="lazy"
        />
        <span className={styles.serviceCard__wrapper_title}>{card.name}</span>
        <div className={styles.serviceCard__wrapper_icon}>
          <ArrowTopRight />
        </div>
      </Link>
    </motion.li>
  );
};

export default ServiceCard;
