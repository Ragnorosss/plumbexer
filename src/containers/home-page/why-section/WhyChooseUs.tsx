"use client";

import { FC, useEffect, useRef } from "react";
import styles from "./whySection.module.scss";
import dynamic from "next/dynamic";
import logosAnimData from "@/../public/anims/logos.json";
import { AnimationItem } from "lottie-web";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import QuestionBanner from "@/components/QuestionBanner/QuestionBanner";
import { motion } from "framer-motion";
import { textAnimation } from "@/components/TextAnimation/TextAnimation";
const Lottie = dynamic(
  () => import("@/components/WrappedLottie/WrappedLottie"),
  { ssr: false },
);

interface WhyChooseUsSectionProps {}

const WhyChooseUsSection: FC<WhyChooseUsSectionProps> = () => {
  const { ref, inView } = useInView({
    rootMargin: "-256px",
  });
  const lottieRef = useRef<AnimationItem>(null);

  useEffect(() => {
    if (inView) {
      lottieRef.current?.setDirection(1);
      lottieRef.current?.play();
      lottieRef.current?.setSpeed(1);
    } else {
      lottieRef.current?.setDirection(-1);
      lottieRef.current?.play();
      lottieRef.current?.setSpeed(10);
    }
  }, [inView]);

  return (
    <motion.section
      ref={ref}
      className={styles.whySection}
      initial={"hidden"}
      whileInView={"visible"}
      viewport={{ amount: 0.2, once: true }}
    >
      <div className={"whySection__container"}>
        <motion.div variants={textAnimation} custom={0.9}>
          <QuestionBanner />
        </motion.div>
        <div
          className={styles.whySection__wrapper}
          style={{ marginTop: "72px" }}
        >
          <div className={styles.whySection__content}>
            <motion.h2
              className={styles.whySection__content_title}
              variants={textAnimation}
              custom={1}
            >
              Why choose us?
            </motion.h2>
            <motion.p
              className={styles.whySection__content_text}
              variants={textAnimation}
              custom={1.2}
            >
              With us, you're not just hiring a plumber; you're entrusting your
              home or business to seasoned professionals committed to
              excellence. Our experience ensures reliable solutions tailored to
              your needs. Equipped with the latest tools, we approach each
              project with precision and efficiency. From minor repairs to major
              installations, our services have you covered. Choose us for
              reliability, expertise, and peace of mind.
            </motion.p>
          </div>
          <motion.div
            className={styles.whySection__image}
            variants={textAnimation}
            custom={1.1}
          >
            <Lottie
              className={styles["whySection__image--desktop"]}
              lottieRef={lottieRef}
              play
              loop={false}
              animationData={logosAnimData}
            />
            <Image
              className={styles["whySection__image--mobile"]}
              width={768}
              height={226}
              src={"/images/logos.svg"}
              alt={"Logos"}
            />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default WhyChooseUsSection;
