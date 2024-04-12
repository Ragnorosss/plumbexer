"use client";
import styles from "./basement.module.scss";
import Image from "next/image";
import QuestionBanner from "@/components/QuestionBanner/QuestionBanner";
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
        custom={1}
      >
        Why does water leak into your basement?
      </motion.h3>
      <div className={styles.basement__wrapper}>
        <motion.div variants={textAnimation}>
          <Image
            src={"/images/water-proofing/worker.png"}
            width={378}
            height={562}
            alt="Service Man"
            className={styles.basement__wrapper_img}
          />
        </motion.div>
        <div className={styles.basement__inner}>
          <motion.p variants={textAnimation} custom={1}>
            Maybe you have heard the term “hydrostatic pressure”. By definition,
            it’s the pressure exerted on a fluid at equilibrium (not flowing) by
            the force of gravity. Hydrostatic pressure increases the deeper you
            get from the surface due to the increasing weight of the fluid from
            above.
          </motion.p>
          <motion.p variants={textAnimation} custom={1.1}>
            Hydrostatic pressure is the reason you see water leaks in the
            basement walls of a home. Water that is building up against the
            foundation wall will eventually leak through eroding concrete, at
            the joint where the poured concrete floor meets the wall, and
            through cracks in the wall, mortar joints or floor if left
            un-checked.
          </motion.p>
          <motion.p variants={textAnimation} custom={1.2}>
            With more precipitation, that becomes more of a factor, especially
            as the soil becomes more saturated. The more loose the soil, the
            more water it absorbs. That expanding soil also puts more pressure
            on the foundation walls. In the event of heavy rain or a rapid snow
            melt, water tables will rise, putting pressure on a basement.
          </motion.p>
          <motion.p variants={textAnimation} custom={1.3}>
            If you really want to stop the problem of flooding at its source,
            you need exterior waterproofing or interior home waterproofing
            system.
          </motion.p>
        </div>
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
