"use client";
import Image from "next/image";
import styles from "./hero.module.scss";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  reversTextAnimation,
  textAnimation,
} from "@/components/TextAnimation/TextAnimation";
export default function Hero() {
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
            Sump pump
          </motion.h1>
          <motion.p
            className={styles.hero__top_info}
            variants={textAnimation}
            custom={1.1}
          >
            Your sump pump is your first line of defense against basement
            flooding. A costly basement flood can happen any time — if you
            suspect a problem with your sump pump, don’t delay in getting it
            looked at!
          </motion.p>
          <motion.div variants={textAnimation} custom={1.2}>
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
          custom={1.1}
        >
          How do sump pumps protect your home?
        </motion.h3>
        <div className={styles.hero__bottom_wrapper}>
          <div className={styles.hero__bottom_info_inner}>
            <motion.p
              className={styles.hero__bottom_info}
              variants={textAnimation}
              custom={1.2}
            >
              A sump pump is a modern device which draws water from the soil
              around your home and pumps it into a holding tank, called a sump
              pit or a sump basin. This technique prevents water from building
              up around your home and putting pressure on your outer walls,
              which can lead to cracks and leaks.
            </motion.p>
            <motion.p
              className={styles.hero__bottom_info}
              variants={textAnimation}
              custom={1.3}
            >
              A sump system works by channeling groundwater into a perimeter
              drain system that is installed at the base of the home’s
              foundation. The pipes that make up this drain system are
              perforated, allowing water to flow in and collect in a sump pit or
              crock.
            </motion.p>
            <motion.p
              className={styles.hero__bottom_info}
              variants={textAnimation}
              custom={1.4}
            >
              The sump pump then redirects the water to the nearest storm drain,
              dry well, or retention pond. Sump pumps are usually triggered by a
              float switch and only activate when water reaches a predetermined
              level in the sump pit. By redirecting excess water, sump pumps
              prevent water from accumulating around the home's foundation and
              beneath the basement floor.
            </motion.p>
          </div>
          <motion.div variants={reversTextAnimation} custom={1.5}>
            <Image
              src={"/images/sump/sump-worker.png"}
              width={376}
              height={510}
              alt="Basement Waterproofing"
              className={"containImg"}
            />
          </motion.div>
        </div>
      </motion.section>
    </>
  );
}
