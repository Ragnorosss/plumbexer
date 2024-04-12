"use client";
import Image from "next/image";
import styles from "./hero.module.scss";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  reversTextAnimation,
  textAnimation,
} from "@/components/TextAnimation/TextAnimation";

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
            Drain service
          </motion.h1>
          <motion.p
            className={styles.hero__top_info}
            variants={textAnimation}
            custom={1.1}
          >
            Regular drain cleaning is essential for maintaining a healthy and
            efficient drainage system. Over time, grease, soap scum, hair, and
            other debris can accumulate inside your pipes, leading to slow
            drainage and unpleasant odours.
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
        <motion.h2
          className={styles.hero__bottom_subtitle}
          variants={textAnimation}
          custom={1.1}
        >
          Preventing Blockages and Ensuring System Health
        </motion.h2>
        <div className={styles.hero__bottom_wrapper}>
          <div className={styles.hero__bottom_info_inner}>
            <motion.p
              className={styles.hero__bottom_info}
              variants={textAnimation}
              custom={1.2}
            >
              Over time, the build-up of scale, dirt, grime and debris can begin
              to cause problems within your drainage systems, leading to
              gurgling noises, bad smells and slow drainage flow from your sink,
              bath or toilet.
            </motion.p>
            <motion.p
              className={styles.hero__bottom_info}
              variants={textAnimation}
              custom={1.3}
            >
              Cleaning your internal and external drains regularly will prevent
              blockages and keep your system in the best condition possible,
              lowering future repair and maintenance costs and eliminating
              health and safety concerns for residents within the property.
            </motion.p>
            <motion.p
              className={styles.hero__bottom_info}
              variants={textAnimation}
              custom={1.4}
            >
              Cleaning your internal and external drains regularly will help to
              prevent blockages and keep your system in the best condition
              possible!
            </motion.p>
          </div>
          <motion.div variants={reversTextAnimation} custom={1.5}>
            <Image
              src={"/images/drain-service/drain-worker-top.png"}
              width={376}
              height={376}
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
