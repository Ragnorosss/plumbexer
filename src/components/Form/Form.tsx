"use client";
import { FC, ReactNode, useState, forwardRef, FormEvent } from "react";
import { motion } from "framer-motion";
import Select from "@/components/Select/Select";
import ServicesList from "@/lists/ServicesList";
import styles from "@/containers/contact-us/contact-section/contactSection.module.scss";
import Link from "next/link";
import Captcha from "@/components/Captcha/Captcha";

type TForm = {
  children?: ReactNode;
  className?: string;
};
export type Ref = HTMLFormElement;
export const Form: FC<TForm> = forwardRef<Ref, TForm>(
  ({ children, className }, ref) => {
    const [fullName, setFullName] = useState<string>("");
    const [phone, setPhone] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [service, setService] = useState<string>("");
    const [text, setText] = useState<string>("");

    const options = ServicesList.map((x) => ({
      title: x.name,
      value: x.val,
    }));
    const handleMonthSelect = (value: string) => {
      setService(value);
    };
    const handleSubmit = async (e: FormEvent) => {
      e.preventDefault();
      const respones = await fetch("/api/mail", {
        method: "POST",
        body: JSON.stringify({
          fullName,
          phone,
          email,
          service,
          text,
        }),
      });
      console.log(respones);
    };
    const selectedOption = options.find((item) => item.value === service);
    return (
      <>
        <form
          ref={ref}
          className={styles.contactSection__form}
          onSubmit={handleSubmit}
        >
          <div className={styles.contactSection__form_inputs}>
            <input
              className={styles.contactSection__form_input}
              placeholder={"Full name"}
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
              maxLength={30}
            />
            <input
              className={styles.contactSection__form_input}
              placeholder={"Phone number"}
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              maxLength={15}
            />
            <input
              className={styles.contactSection__form_input}
              placeholder={"Email address"}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Select
              options={options}
              selected={selectedOption || null}
              onChange={handleMonthSelect}
              placeholder={"Select service needed"}
            />
            <textarea
              className={styles.contactSection__form_textarea}
              placeholder={"Message"}
              value={text}
              onChange={(e) => setText(e.target.value)}
              required
              maxLength={120}
            />
          </div>
          <div className={styles.contactSection__form_lastItem}>
            <button className={styles.contactSection__form_lastItem_button}>
              Submit
            </button>
            <div className={styles.contactSection__form_lastItem_text}>
              <span>By clicking the Submit button you</span>
              <Link href={"/privacy-policy"}>
                agree to our <b>Privacy Policy</b> terms
              </Link>
            </div>
              <Captcha/>
          </div>
        </form>
      </>
    );
  },
);
export const MForm = motion(Form);
