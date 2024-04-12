"use client";
import styles from "./basement.module.scss";
import Image from "next/image";
import QuestionBanner from "@/components/QuestionBanner/QuestionBanner";
import { motion } from "framer-motion";
import { textAnimation } from "@/components/TextAnimation/TextAnimation";

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
        Various plumbing tasks and services
      </motion.h3>
      <div className={styles.basement__wrapper}>
        <motion.div variants={textAnimation} custom={1.1}>
          <Image
            src={"/images/drain-service/drain-worker.png"}
            width={376}
            height={782}
            alt="Service Man"
            className={"containImg"}
          />
        </motion.div>
        <ul className={styles.basement__list}>
          <motion.li variants={textAnimation} custom={1.2}>
            Drain Cleaning: Removing clogs, debris, and buildup from drains
            using tools like drain snakes, augers, hydro-jetting, or chemical
            cleaners.
          </motion.li>
          <motion.li variants={textAnimation} custom={1.3}>
            Drain Inspection: Using cameras or other equipment to inspect the
            interior of drains for blockages, damage, or potential issues.
          </motion.li>
          <motion.li variants={textAnimation} custom={1.3}>
            Drain Repair: Fixing leaks, cracks, or damaged pipes within the
            drainage system to restore proper functionality.
          </motion.li>
          <motion.li variants={textAnimation} custom={1.4}>
            Drain Maintenance: Implementing preventive measures such as regular
            cleaning, flushing, and treatment to keep drains clear and
            functioning efficiently.
          </motion.li>
          <motion.li variants={textAnimation} custom={1.5}>
            Drain Installation: Installing new drain pipes, fittings, or systems
            for residential or commercial properties, including proper alignment
            and connection to the existing plumbing system.
          </motion.li>
          <motion.li variants={textAnimation} custom={1.6}>
            Drainage System Design: Designing efficient and effective drainage
            systems for new construction projects or renovations, considering
            factors like layout, slope, and capacity.
          </motion.li>
          <motion.li variants={textAnimation} custom={1.7}>
            Emergency Drain Services: Providing rapid response and solutions for
            urgent drain issues such as severe clogs, backups, or flooding.
          </motion.li>
        </ul>
      </div>
      <motion.div
        variants={textAnimation}
        custom={4}
        style={{ marginTop: 100, marginBottom: 100 }}
      >
        <QuestionBanner />
      </motion.div>
    </motion.section>
  );
};

export default Basement;
