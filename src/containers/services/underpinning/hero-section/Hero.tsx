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
            custom={0.5}
          >
            Underpinning
          </motion.h1>
          <motion.p
            className={styles.hero__top_info}
            variants={textAnimation}
            custom={1}
          >
            Underpinning s strengthening or reinforcing the foundation of an
            existing building of structure. It is typically done when the
            existing foundation is no longer firm enough to support the
            building's weight or when the soil conditions have changed so the
            foundation is no longer stable.
          </motion.p>
          <motion.div variants={textAnimation} custom={1.5}>
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
          custom={1}
        >
          Underpinning adds new square footage
        </motion.h2>
        <div className={styles.hero__bottom_wrapper}>
          <div className={styles.hero__bottom_info_inner}>
            <motion.p
              className={styles.hero__bottom_info}
              variants={textAnimation}
              custom={1.1}
            >
              It's a complicated process, and it will be disruptive for everyone
              involved, but the return-on-investment wil be substantial.
            </motion.p>
            <motion.p
              className={styles.hero__bottom_info}
              variants={textAnimation}
              custom={1.2}
            >
              Whats underpinning? Is an industry term. ts the process of
              lowering the basement of the home.
            </motion.p>
            <motion.p
              className={styles.hero__bottom_info}
              variants={textAnimation}
              custom={1.3}
            >
              As you can guess, this isnt ajob for amateurs. requires
              expertisecnd professionalism. I requires workers who are
              accredited and insured. It`s vital to determine the fight
              excavation levels for the home. Its critical to know the footing
              arrangement and the plans and details for moving or extending
              load-bearing walls. It goss without saying that underpinning done
              incorrectly can be dangerous and dire for those wha live in the
              home.
            </motion.p>
            <motion.p
              className={styles.hero__bottom_info}
              variants={textAnimation}
              custom={1.4}
            >
              Technicians wi dig under the existing foundation and add a new
              concrete footing extension to the basement perimeter, and a new
              concrete floor slab.
            </motion.p>
            <motion.p
              className={styles.hero__bottom_info}
              variants={textAnimation}
              custom={1.5}
            >
              Underpinning requires inspections and snginesring reports
              Brougriout the entire project. City inspection i free, but
              engineer reports are an additional cost. Reports may be required
              at the sole discretion of the city inspector.
            </motion.p>
          </div>
          <motion.div variants={reversTextAnimation} custom={1.6}>
            <Image
              src={"/images/underpinning/underpinning-worker.png"}
              width={376}
              height={570}
              alt="Basement Waterproofing"
              className={styles.hero__bottom_img}
            />
          </motion.div>
        </div>
      </motion.section>
    </>
  );
};

export default Hero;
