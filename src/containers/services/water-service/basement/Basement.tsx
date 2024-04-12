"use client";
import styles from "./basement.module.scss";
import Image from "next/image";
import QuestionBanner from "@/components/QuestionBanner/QuestionBanner";
import { motion } from "framer-motion";
import {
  reversTextAnimation,
  textAnimation,
} from "@/components/TextAnimation/TextAnimation";
const Basement = () => {
  return (
    <motion.section
      className={styles.basement}
      initial={"hidden"}
      whileInView={"visible"}
      viewport={{ amount: 0.2, once: true }}
    >
      <motion.h3
        className={styles.basement__subtitle}
        variants={textAnimation}
        custom={1}
      >
        Why does water leak into your basement?
      </motion.h3>
      <div className={styles.basement__wrapper}>
        <motion.div variants={textAnimation} custom={1.3}>
          <Image
            src={"/images/water-service/water-service-system1.png"}
            width={376}
            height={812}
            alt="Service Man"
            className={"containImg"}
          />
        </motion.div>
        <ul className={styles.basement__list}>
          <motion.li variants={reversTextAnimation} custom={1.4}>
            Leak Detection and Repair: Identify and fix leaks in pipes,
            fixtures, and appliances to prevent water waste and property damage.
          </motion.li>
          <motion.li variants={reversTextAnimation} custom={1.5}>
            Water Heater Installation and Repair: Install, service, and repair
            water heaters for efficient hot water supply.
          </motion.li>
          <motion.li variants={reversTextAnimation} custom={1.6}>
            Filtration and Treatment: Maintain water filtration systems for
            improved water quality.
          </motion.li>
          <motion.li variants={reversTextAnimation} custom={1.7}>
            Pressure Adjustment: Optimize water pressure to prevent damage and
            ensure system efficiency.
          </motion.li>
          <motion.li variants={reversTextAnimation} custom={1.8}>
            Meter Installation and Maintenance: Calibrate meters for accurate
            usage measurement and leak detection.
          </motion.li>
          <motion.li variants={reversTextAnimation} custom={1.9}>
            Backflow Prevention: Install and test devices to safeguard water
            supply from contamination.
          </motion.li>
          <motion.li variants={reversTextAnimation} custom={2}>
            Line Repairs and Replacement: Repair or replace damaged water lines
            to maintain flow and prevent loss.
          </motion.li>
          <motion.li variants={reversTextAnimation} custom={2.1}>
            Conservation Solutions: Promote water conservation through efficient
            fixtures and systems.
          </motion.li>
          <motion.li variants={reversTextAnimation} custom={2.2}>
            Emergency Repairs: Provide 24/7 services for sudden water
            disruptions like bursts or backups.
          </motion.li>
        </ul>
      </div>
      <motion.div
        variants={reversTextAnimation}
        custom={5}
        style={{ marginTop: 100, marginBottom: 100 }}
      >
        <QuestionBanner />
      </motion.div>
    </motion.section>
  );
};

export default Basement;
