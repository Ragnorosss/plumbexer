"use client";

import { FC } from "react";
import styles from "./QuestionBanner.module.scss";
import dynamic from "next/dynamic";
import chatAnimData from "@/../public/anims/chat_animation.json";
import Link from "next/link";

const Lottie = dynamic(
  () => import("@/components/WrappedLottie/WrappedLottie"),
  { ssr: false },
);

const QuestionBanner: FC = () => {
  return (
    <div className={styles.questionBanner}>
      <div className={styles.questionBanner__animation}>
        <Lottie
          loop
          play
          rendererSettings={{ preserveAspectRatio: "xMidYMid slice" }}
          animationData={chatAnimData}
        />
      </div>
      <div className={styles.questionBanner__content}>
        <div className={styles.questionBanner__content_text}>
          <span>We are here to help you!</span>
          <span>Ask us a question?</span>
        </div>
        <Link
          href={"/contact-us"}
          className={styles.questionBanner__content_button}
        >
          Contact us
        </Link>
      </div>
    </div>
  );
};

export default QuestionBanner;
