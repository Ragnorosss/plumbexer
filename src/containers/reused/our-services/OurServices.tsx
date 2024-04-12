"use client";

import { FC, ReactElement } from "react";
import ServicesList from "@/lists/ServicesList";
import { ServiceType } from "@/types/ServiceCard";
import ServiceCard from "@/components/ServiceCard/ServiceCard";
import { motion } from "framer-motion";
import styles from "./ourServices.module.scss";

interface OurServicesSectionProps {}

const OurServicesSection: FC<OurServicesSectionProps> = ({}) => {
  return (
    <motion.section
      className={styles.ourServices}
      initial={"hidden"}
      whileInView={"visible"}
      viewport={{ amount: 0.5, once: true }}
    >
      <div className={"ourServices__container"}>
        <div className={styles.ourServices__wrapper}>
          <h2 className={styles.ourServices__wrapper_title}>Our services</h2>
          <ul className={styles.ourServices__wrapper_servicesList}>
            {ServicesList.map(
              (e: ServiceType, idx): ReactElement => (
                <ServiceCard key={idx} delay={idx * 0.1} card={e} />
              ),
            )}
          </ul>
        </div>
      </div>
    </motion.section>
  );
};

export default OurServicesSection;
