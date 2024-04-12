"use client";
import Image from "next/image";
import styles from "./hero.module.scss";
import Link from "next/link";
import { motion } from "framer-motion";
import { textAnimation } from "@/components/TextAnimation/TextAnimation";
const Hero = () => {
  return (
    <>
      <motion.section
        className={styles.hero}
        initial={"hidden"}
        whileInView={"visible"}
        viewport={{ once: true }}
        style={{ marginTop: 30 }}
      >
        <div className={styles.hero__top}>
          <motion.h1
            className={styles.hero__top_title}
            variants={textAnimation}
            custom={1}
          >
            Water service
          </motion.h1>
          <motion.p
            className={styles.hero__top_info}
            variants={textAnimation}
            custom={1.2}
          >
            Water service is a crucial aspect of any property's infrastructure,
            providing essential access to clean and reliable water for various
            purposes. From drinking and cooking to bathing and sanitation, a
            dependable water service system is essential for the health, safety,
            and comfort of occupants.
          </motion.p>
          <motion.div variants={textAnimation} custom={1.3}>
            <Link href={"/contact-us"} className={styles.hero__top_link}>
              Contact us
            </Link>
          </motion.div>
        </div>
      </motion.section>
      <motion.section
        className={styles.hero__bottom}
        initial={"hidden"}
        whileInView={"visible"}
        viewport={{ amount: 0.5, once: true }}
      >
        <motion.h3
          className={styles.hero__bottom_subtitle}
          variants={textAnimation}
          custom={1}
        >
          Essential Insights of Water service
        </motion.h3>
        <div className={styles.hero__bottom_wrapper}>
          <div className={styles.hero__bottom_info_inner}>
            <motion.p
              className={styles.hero__bottom_info}
              variants={textAnimation}
              custom={1.1}
            >
              Maintaining a well-functioning water service system is paramount
              to ensure uninterrupted access to clean water. Routine
              inspections, repairs, and upgrades are necessary to address issues
              such as leaks, corrosion, sediment buildup, and inadequate water
              pressure. Additionally, proper insulation and protection against
              freezing temperatures are essential in colder climates to prevent
              pipe damage and water service disruptions during winter months.
            </motion.p>
            <motion.p
              className={styles.hero__bottom_info}
              variants={textAnimation}
              custom={1.2}
            >
              In the event of water service emergencies, such as burst pipes or
              water main breaks, prompt action is crucial to minimize property
              damage and restore water service promptly. Professional plumbing
              services can quickly diagnose and address such issues, ensuring
              swift resolution and minimal disruption to occupants.
            </motion.p>
            <motion.p
              className={styles.hero__bottom_info}
              variants={textAnimation}
              custom={1.3}
            >
              In conclusion, water service plays a vital role in maintaining the
              functionality, safety, and sustainability of residential,
              commercial, and industrial properties. By investing in proper
              maintenance, repairs, and upgrades, property owners can ensure
              reliable access to clean water while minimizing the risk of
              water-related issues and optimizing resource efficiency.
            </motion.p>
          </div>
          <motion.div variants={textAnimation} custom={1.5}>
            <Image
              src={"/images/water-service/water-service-system.png"}
              width={376}
              height={562}
              alt="Basement Waterproofing"
              className={"containImg"}
            />
          </motion.div>
        </div>
      </motion.section>
    </>
  );
};

export default Hero;
