"use client";
import styles from "./basement.module.scss";
import QuestionBanner from "@/components/QuestionBanner/QuestionBanner";
import { motion } from "framer-motion";
import { textAnimation } from "@/components/TextAnimation/TextAnimation";

const Basement = () => {
  return (
    <motion.section
      className={styles.basement}
      initial={"hidden"}
      whileInView={"visible"}
      viewport={{ amount: 0.5, once: true }}
    >
      <motion.h3
        className={styles.basement__subtitle}
        variants={textAnimation}
        custom={1}
      >
        What is the purpose of underpinning?{" "}
      </motion.h3>
      <ul className={styles.basement__list}>
        <motion.li variants={textAnimation} custom={1.1}>
          Prevent settlement/sinking of an existing foundation.
        </motion.li>
        <motion.li variants={textAnimation} custom={1.2}>
          Provide support for an existing building or structure during the
          construction of another.
        </motion.li>
        <motion.li variants={textAnimation} custom={1.3}>
          Installation of new foundation inside existing building to support new
          equipment or build outs.
        </motion.li>
        <motion.li variants={textAnimation} custom={1.4}>
          Building an addition on top of the existing building.
        </motion.li>
      </ul>
      <motion.p
        className={styles.basement__text}
        variants={textAnimation}
        custom={1.5}
      >
        All of the foundation technologies we provide including helical piles,
        helical micro piles, micro pipes, large diameter piles, and driven piles
        can be utilized to underpin existing structures.
      </motion.p>
      <motion.div
        variants={textAnimation}
        custom={1.5}
        style={{ marginTop: 100, marginBottom: 100 }}
      >
        <QuestionBanner />
      </motion.div>
    </motion.section>
  );
};

export default Basement;
