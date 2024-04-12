"use client";

import { FC } from "react";
import styles from "./contactSection.module.scss";
import { motion } from "framer-motion";
import {
  reversTextAnimation,
  textAnimation,
} from "@/components/TextAnimation/TextAnimation";
import { Form, MForm } from "@/components/Form/Form";

interface ContactSectionProps {}

const ContactSection = () => {
  return (
    <motion.section
      className={styles.contactSection}
      initial={"hidden"}
      whileInView={"visible"}
      viewport={{ amount: 0.2, once: true }}
    >
      <div className={"contactSection__container"}>
        <div className={styles.contactSection__wrapper}>
          <motion.h2
            className={styles.contactSection__title}
            variants={textAnimation}
            custom={0.9}
          >
            Need plumbing services?
          </motion.h2>
          <div className={styles.contactSection__content}>
            <div className={styles.contactSection__text}>
              <motion.p
                className={styles.contactSection__answer}
                variants={textAnimation}
                custom={1}
              >
                Our plumbing services are quick, reliable, and always leave our
                customers satisfied! We offer plumbing emergency service
                residential plumbing.
              </motion.p>
              <div className={styles.contactSection__contacts}>
                <div className={styles.contactSection__contacts_item}>
                  <motion.span
                    className={styles.contactSection__contacts_item_title}
                    variants={textAnimation}
                    custom={1.1}
                  >
                    Phone
                  </motion.span>
                  <motion.a
                    className={styles.contactSection__contacts_item_subtitle}
                    href={"tel:+14375565332"}
                    variants={textAnimation}
                    custom={1.2}
                  >
                    +1 437 556 5332
                  </motion.a>
                </div>
                <div className={styles.contactSection__contacts_item}>
                  <motion.span
                    className={styles.contactSection__contacts_item_title}
                    variants={textAnimation}
                    custom={1.3}
                  >
                    Email
                  </motion.span>
                  <motion.a
                    className={styles.contactSection__contacts_item_subtitle}
                    href={"mailto:plumbexer@gmail.com\n"}
                    variants={textAnimation}
                    custom={1.4}
                  >
                    plumbexer@gmail.com
                  </motion.a>
                </div>
              </div>
            </div>
            <MForm
              className={styles.contactSection__form}
              variants={reversTextAnimation}
              custom={1.2}
            >
              <div className={styles.contactSection__form_inputs}>
                <motion.input
                  className={styles.contactSection__form_input}
                  placeholder={"Full name"}
                  variants={reversTextAnimation}
                  custom={1.3}
                />
                <motion.input
                  className={styles.contactSection__form_input}
                  placeholder={"Email address"}
                  variants={reversTextAnimation}
                  custom={1.4}
                />
                <motion.textarea
                  className={styles.contactSection__form_textarea}
                  placeholder={"Message"}
                  variants={reversTextAnimation}
                  custom={1.5}
                />
              </div>
              <motion.div className={styles.contactSection__form_lastItem}>
                <motion.button
                  className={styles.contactSection__form_lastItem_button}
                  variants={textAnimation}
                  custom={1.6}
                >
                  Submit
                </motion.button>
                <div className={styles.contactSection__form_lastItem_text}>
                  <motion.span variants={reversTextAnimation} custom={1.6}>
                    By clicking the Submit button you
                  </motion.span>
                  <motion.span variants={reversTextAnimation} custom={1.6}>
                    agree to our <b>Privacy Policy</b> terms
                  </motion.span>
                </div>
              </motion.div>
            </MForm>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default ContactSection;
