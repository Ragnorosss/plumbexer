"use client";
import styles from "./basement.module.scss";
import Image from "next/image";
import QuestionBanner from "@/components/QuestionBanner/QuestionBanner";
import { motion } from "framer-motion";
import {
  reversTextAnimation,
  textAnimation,
} from "@/components/TextAnimation/TextAnimation";

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
        Why does water leak into your basement?
      </motion.h3>
      <div className={styles.basement__wrapper}>
        <motion.div variants={textAnimation} custom={1.3}>
          <Image
            src={"/images/sump/sump-worker1.png"}
            width={378}
            height={658}
            alt="Service Man"
            className={"containImg"}
          />
        </motion.div>
        <div className={styles.basement__inner}>
          <motion.p variants={reversTextAnimation} custom={1}>
            Many don't think of sump pump maintenance — until they have the
            misfortune of standing ankle-deep in their flooded basement after a
            heavy rainfall. Be proactive and ensure your sump pump is in good
            working order to prevent costly water damage.
            <br />
            <br />
            The following signs may indicate your sump pump needs replacing or
            repair:
          </motion.p>
          <ul className={styles.basement__list}>
            <motion.li variants={reversTextAnimation} custom={1.2}>
              Sump pump cycles on and off frequently.
            </motion.li>
            <motion.li variants={reversTextAnimation} custom={1.3}>
              Water takes a long time to drain.
            </motion.li>
            <motion.li variants={reversTextAnimation} custom={1.4}>
              Sump pump is making more noise than usual.
            </motion.li>
            <motion.li variants={reversTextAnimation} custom={1.5}>
              Sump pump does not turn on; water is not being drained.
            </motion.li>
            <motion.li variants={reversTextAnimation} custom={1.6}>
              Foul odors are coming from the sump pump area.
            </motion.li>
          </ul>
          <motion.p variants={reversTextAnimation} custom={1.7}>
            Any of these signs could indicate your sump pump requires
            replacement or that a simple adjustment or upgrade is necessary.
            Determining the right size pump for your home is critical, as an
            overworked pump will burn out faster.
          </motion.p>
          <motion.p variants={reversTextAnimation} custom={1.8}>
            When it’s time to replace, we can analyze the amount of water you
            need to pump and the distance it needs pumping, and we’ll suggest a
            unit that has the power to meet your needs.
          </motion.p>
        </div>
      </div>
      <motion.div
        variants={reversTextAnimation}
        custom={4}
        style={{ marginTop: 100, marginBottom: 100 }}
      >
        <QuestionBanner />
      </motion.div>
    </motion.section>
  );
};

export default Basement;
