"use client";
import Image from "next/image";
import Link from "next/link";
import styles from "./hero.module.scss";
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
            Pipe bursting
          </motion.h1>
          <motion.p
            className={styles.hero__top_info}
            variants={textAnimation}
            custom={1.1}
          >
            In the realm of plumbing services, innovations are constantly
            evolving to offer more efficient and less invasive solutions. One
            such advancement is "pipe bursting," a trenchless method
            revolutionizing the way pipelines are replaced. If you're facing
            issues with your underground pipelines, understanding pipe bursting
            could help you make informed decisions when seeking plumbing
            services.
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
          Pipe Bursting: A Trenchless Solution for Pipeline Replacement
        </motion.h3>
        <div className={styles.hero__bottom_wrapper}>
          <div className={styles.hero__bottom_info_inner}>
            <motion.p
              className={styles.hero__bottom_info}
              variants={textAnimation}
              custom={1.2}
            >
              Pipe bursting is a trenchless technique used to replace old or
              damaged underground pipes without the need for extensive
              excavation. Unlike traditional methods that involve digging
              trenches to access and replace pipes, pipe bursting works by
              breaking apart the existing pipe while simultaneously pulling a
              new pipe into place.
            </motion.p>
            <motion.p
              className={styles.hero__bottom_info}
              variants={textAnimation}
              custom={1.3}
            >
              "Pipe bursting" minimizes disruption to your property and
              surrounding areas due to its requirement for only small access
              points. By reducing the need for extensive excavation, pipe
              bursting significantly decreases disturbances to landscaping,
              driveways, sidewalks, and other structures.
            </motion.p>
            <motion.p
              className={styles.hero__bottom_info}
              variants={textAnimation}
              custom={1.4}
            >
              In addition to cost savings, pipe bursting also ensures faster
              project completion. With fewer steps involved and reduced
              disruption to the surrounding environment, pipe bursting projects
              are typically finished more quickly than traditional pipe
              replacement methods.
            </motion.p>
            <motion.p
              className={styles.hero__bottom_info}
              variants={textAnimation}
              custom={1.5}
            >
              In essence, pipe bursting offers a comprehensive solution that
              prioritizes efficiency, cost-effectiveness, and durability. It
              provides a reliable and sustainable option for addressing pipeline
              replacement needs with minimal disruption and maximum
              effectiveness.
            </motion.p>
          </div>
          <motion.div variants={reversTextAnimation} custom={1.6}>
            <Image
              src={"/images/pipe/system.png"}
              width={376}
              height={592}
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
