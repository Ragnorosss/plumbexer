'use client'
import { FC, ReactNode, useState, forwardRef, FormEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Select from "@/components/Select/Select";
import ServicesList from "@/lists/ServicesList";
import styles from "@/containers/contact-us/contact-section/contactSection.module.scss";
import Link from "next/link";
import Loader from "../Loader/Loader";
import Modal from "../Modal/Modal";

type TForm = {
  children?: ReactNode;
  className?: string;
};

export const Form: FC<TForm> = forwardRef<HTMLFormElement, TForm>(({ children, className }, ref) => {
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [service, setService] = useState("");
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);
  const [modalData, setModalData] = useState({ open: false, message: "" });
  const [errors, setErrors] = useState({ fullName: '', phone: '', email: '', text: '' });
  const options = ServicesList.map((x) => ({
    title: x.name,
    value: x.val,
  }));
  const selectedOption = options.find((item) => item.value === service);
  const closeModal = () => {
    setModalData({ ...modalData, open: false });
  };
  const handleMonthSelect = (value: string) => {
    setService(value);
  };
  const validateForm = () => {
    let tempErrors = { fullName: '', phone: '', email: '', text: '' };
    let isValid = true;
    if (fullName.trim() === "") {
      tempErrors.fullName = "Full name is required";
      isValid = false;
    }
    if (!phone.match(/^\+?\d{10,15}$/)) { // Простая проверка телефонного номера
      tempErrors.phone = "Phone number is invalid";
      isValid = false;
    }
    if (!email.match(/^[^@\s]+@[^@\s]+\.[^@\s]+$/)) { // Простая проверка формата email
      tempErrors.email = "Email is invalid";
      isValid = false;
    }
    if (text.trim() === "") {
      tempErrors.text = "Message is required";
      isValid = false;
    }
    setErrors(tempErrors);
    return isValid;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateForm()) return;
    setLoading(true);
    try {
      const response = await fetch("/api/mail", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fullName,
          phone,
          email,
          service,
          text,
        }),
      });

      const result = await response.json();
      if (response.ok) {
        setModalData({ open: true, message: 'Message sent successfully.' });
      } else {
        setModalData({ open: true, message: result.message || 'Something went wrong, please try again.' });
      }
    } catch (error) {
      setModalData({ open: true, message: 'An error occurred. Please try again.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <AnimatePresence>
        {loading && <Loader />}
        {modalData.open && (
          <Modal message={modalData.message} onClose={() => setModalData({ open: false, message: '' })} />
        )}
      </AnimatePresence>
      <form ref={ref} className={className} onSubmit={handleSubmit}>
        <div className={styles.contactSection__form_inputs}>
          <input className={styles.contactSection__form_input} placeholder="Full name" value={fullName} onChange={e => setFullName(e.target.value)} required />
          {errors.fullName && <div className={styles.error}>{errors.fullName}</div>}
          <input className={styles.contactSection__form_input} placeholder="Phone number" value={phone} onChange={e => setPhone(e.target.value)} required />
          {errors.phone && <div className={styles.error}>{errors.phone}</div>}
          <input className={styles.contactSection__form_input} placeholder="Email address" value={email} onChange={e => setEmail(e.target.value)} required />
          {errors.email && <div className={styles.error}>{errors.email}</div>}
          <Select
              options={options}
              selected={selectedOption || null}
              onChange={handleMonthSelect}
              placeholder={"Select service needed"}
            />
          <textarea className={styles.contactSection__form_textarea} placeholder="Message" value={text} onChange={e => setText(e.target.value)} required />
          {errors.text && <div className={styles.error}>{errors.text}</div>}
        </div>
        <div className={styles.contactSection__form_lastItem}>
        <button className={styles.contactSection__form_lastItem_button}>
              Submit
            </button>
          <div className={styles.contactSection__form_lastItem_text}>
            <span>By clicking the Submit button you</span>
            <Link href="/privacy-policy">agree to our <b>Privacy Policy</b></Link>
          </div>
        </div>
      </form>
    </>
  );
});

export const MForm = motion(Form);
