"use client";
import styles from "./heroSection.module.scss";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  imageAnimation,
  imageMobileAnimation,
  reversImageAnimation,
  textAnimationVer,
} from "@/components/TextAnimation/TextAnimation";
import { MButton } from "@/components/Button/Button";

const HeroSection = () => {
  return (
    <motion.section
      className={styles.heroSection}
      initial={"hidden"}
      whileInView={"visible"}
      viewport={{ once: true }}
    >
      <div className={"heroSection__container"}>
        <div className={styles.heroSection__wrapper}>
          <div className={styles.heroSection__wrapper_image}>
            <div className={styles["heroSection__wrapper_image--desktop"]}>
              <motion.div variants={imageAnimation}>
                <Image
                  width={275}
                  height={720}
                  src={"/images/hero-image-left.png"}
                  className={styles["heroSection__wrapper_image--desktop-left"]}
                  alt={""}
                  priority
                />
              </motion.div>
              <motion.div custom={1} variants={reversImageAnimation}>
                <Image
                  className={
                    styles["heroSection__wrapper_image--desktop-right"]
                  }
                  width={275}
                  height={720}
                  src={"/images/hero-image-right.png"}
                  alt={""}
                  priority
                />
              </motion.div>
            </div>
            <motion.div variants={imageMobileAnimation}>
              <Image
                className={styles["heroSection__wrapper_image--mobile"]}
                width={500}
                height={720}
                src={"/images/hero-image-mobile.png"}
                alt={""}
                priority
              />
            </motion.div>
          </div>
          <div className={styles.heroSection__wrapper_content}>
            <motion.h1
              variants={textAnimationVer}
              className={styles.heroSection__wrapper_content_title}
            >
              Pipe dreams fixed, Service that flows!
            </motion.h1>
            <motion.span
              variants={textAnimationVer}
              custom={1}
              className={styles.heroSection__wrapper_content_subtitle}
            >
              Plumbexer : your trusted pipeline partner
            </motion.span>
            <motion.div custom={1.4} variants={textAnimationVer}>
              <MButton
                className={styles.heroSection__wrapper_content_contactUs}
                type={"button"}
              >
                Contact us
              </MButton>
            </motion.div>
          </div>
          <ol className={styles.heroSection__wrapper_list}>
            <motion.li variants={textAnimationVer} custom={0.9}>
              Diverse array of services designed to meet any plumbing needs
              efficiently
            </motion.li>
            <motion.li variants={textAnimationVer} custom={1.2}>
              Advanced diagnostic tools for precise plumbing solutions
            </motion.li>
            <motion.li variants={textAnimationVer} custom={1.3}>
              Experts for reliable and skilled plumbing services
            </motion.li>
          </ol>
        </div>
      </div>
    </motion.section>
  );
};

export default HeroSection;
