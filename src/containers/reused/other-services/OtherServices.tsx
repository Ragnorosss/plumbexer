"use client";

import { FC, ReactElement } from "react";
import ServicesList from "@/lists/ServicesList";
import { ServiceType } from "@/types/ServiceCard";
import ServiceCard from "@/components/ServiceCard/ServiceCard";
import { motion } from "framer-motion";
import styles from "./otherServices.module.scss";
import { usePathname } from "next/navigation";

interface OtherServicesSectionProps {}

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

const OtherServicesSection: FC<OtherServicesSectionProps> = ({}) => {
  const pathname = usePathname();
  const list = ServicesList.filter((x) => x.url !== pathname);
  return (
    <motion.section
      initial={"hidden"}
      viewport={{ amount: 0.2, once: true }}
      whileInView={"visible"}
      className={styles.otherServices}
    >
      <div className={"otherServices__container"}>
        <div className={styles.otherServices__wrapper}>
          <h2 className={styles.otherServices__wrapper_title}>
            Other services do we offer
          </h2>
          <ul className={styles.otherServices__wrapper_servicesList}>
            {list.map(
              (e: ServiceType, idx): ReactElement => (
                <ServiceCard key={idx} delay={idx * 0.1} card={e} />
              ),
            )}
            <motion.li
              custom={0.5}
              variants={cardAnimation}
              className={styles.serviceCardCall}
            >
              <div className={styles.serviceCardCall__wrapper}>
                <span className={styles.serviceCardCall__wrapper_title}>
                  Didn't find the service you were looking for?
                </span>
                <span className={styles.serviceCardCall__wrapper_subtitle}>
                  Call and we will try to help you solve the problem
                </span>
                <a
                  className={styles.serviceCardCall__wrapper_button}
                  href={"tel:+1234567890"}
                >
                  Call us
                </a>
              </div>
            </motion.li>
          </ul>
        </div>
      </div>
    </motion.section>
  );
};

export default OtherServicesSection;
