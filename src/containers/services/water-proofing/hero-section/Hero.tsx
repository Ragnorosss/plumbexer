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
            custom={1.2}
          >
            Waterproofing
          </motion.h1>
          <motion.p
            className={styles.hero__top_info}
            variants={textAnimation}
            custom={1.3}
          >
            Waterproofing is a crucial aspect of any building’s construction and
            maintenance. It helps protect the structure and its inhabitants from
            water damage and mold growth.
          </motion.p>
          <motion.div variants={textAnimation} custom={1.4}>
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
          The importance of basement waterproofing
        </motion.h3>
        <div className={styles.hero__bottom_wrapper}>
          <div className={styles.hero__bottom_info_inner}>
            <motion.p
              className={styles.hero__bottom_info}
              variants={textAnimation}
              custom={1.1}
            >
              If you are planning on renovating your home to create more livable
              space, one of the best ways to achieve your goal is by utilizing
              existing space in your basement. But if your basement shows signs
              of water damage, the first thing to do is call us.
            </motion.p>
            <motion.p
              className={styles.hero__bottom_info}
              variants={textAnimation}
              custom={1.2}
            >
              A dry basement is essential for the overall health of your home.
              Here’s why basement waterproofing matters:
            </motion.p>
            <ul className={styles.hero__bottom_list}>
              <motion.li
                className={styles.hero__bottom_list_item}
                variants={textAnimation}
                custom={1.3}
              >
                Prevent Water Damage: Waterproofing your basement safeguards
                against costly water damage, including structural issues, mold
                growth, and damaged belongings.
              </motion.li>
              <motion.li
                className={styles.hero__bottom_list_item}
                variants={textAnimation}
                custom={1.4}
              >
                Enhance Home Value: A waterproofed basement increases the value
                of your property and makes it more attractive to potential
                buyers.
              </motion.li>
              <motion.li
                className={styles.hero__bottom_list_item}
                variants={textAnimation}
                custom={1.5}
              >
                Create Usable Space: Waterproofing transforms your basement into
                valuable living or storage space, expanding the functionality of
                your home.
              </motion.li>
            </ul>
          </div>
          <motion.div variants={reversTextAnimation} custom={1.6}>
            <Image
              src={"/images/water-proofing/BasementImg.png"}
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
};

export default Hero;
