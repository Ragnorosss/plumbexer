"use client";
import Image from "next/image";
import QuestionBanner from "@/components/QuestionBanner/QuestionBanner";
import styles from "./basement.module.scss";
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
        custom={1.1}
      >
        How Does Pipe Bursting Work?
      </motion.h3>
      <div className={styles.basement__wrapper}>
        <motion.div variants={textAnimation} custom={1.1}>
          <Image
            src={"/images/pipe/system1.png"}
            width={378}
            height={562}
            alt="Service Man"
            className={styles.basement__img}
          />
        </motion.div>
        <ul className={styles.basement__list}>
          <motion.li variants={textAnimation} custom={1.2}>
            Assessment: A qualified plumbing technician will assess the
            condition of your existing pipeline to determine if pipe bursting is
            suitable for your situation.
          </motion.li>
          <motion.li variants={textAnimation} custom={1.3}>
            Preparation: Before the pipe bursting process begins, the technician
            will prepare the necessary equipment and materials for the job.
          </motion.li>
          <motion.li variants={textAnimation} custom={1.4}>
            Pipe Insertion: A specialized bursting head, attached to a cable or
            rod, is inserted into the existing pipeline through an access point.
            The bursting head is equipped with cutting blades or an expander.
          </motion.li>
          <motion.li variants={textAnimation} custom={1.5}>
            Pipe Replacement: Using hydraulic power, the bursting head fractures
            the old pipe while simultaneously pulling a new pipe of the same or
            larger diameter into place behind it. The new pipe typically
            consists of high-density polyethylene (HDPE) or other durable
            materials.
          </motion.li>
          <motion.li variants={textAnimation} custom={1.6}>
            Completion: Once the pipe bursting process is complete, the new pipe
            is connected to the existing plumbing system, and any necessary
            adjustments or repairs are made.
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
