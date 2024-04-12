import { FC } from "react";
import styles from "./contactSection.module.scss";
import { Form } from "@/components/Form/Form";

interface ContactSectionProps {}

const ContactSection: FC<ContactSectionProps> = () => {
  return (
    <section className={styles.contactSection}>
      <div className={"contactSection__container"}>
        <div className={styles.contactSection__wrapper}>
          <h2 className={styles.contactSection__title}>Contact us</h2>
          <div className={styles.contactSection__content}>
            <div className={styles.contactSection__text}>
              <div className={styles.contactSection__answer}>
                <span>
                  Let's discuss your next project! <br />
                  We ask all prospective clients to start by booking a free
                  consultation with us so we can chat about your project.
                </span>
                <span>
                  If you have any questions for the Plumbexer - you can also
                  contact us through the contact form.
                </span>
              </div>
              <div className={styles.contactSection__contacts}>
                <div className={styles.contactSection__contacts_item}>
                  <span className={styles.contactSection__contacts_item_title}>
                    Phone
                  </span>
                  <a
                    className={styles.contactSection__contacts_item_subtitle}
                    href={"tel:+14375565332"}
                  >
                    +1 437 556 5332
                  </a>
                </div>
                <div className={styles.contactSection__contacts_item}>
                  <span className={styles.contactSection__contacts_item_title}>
                    Email
                  </span>
                  <a
                    className={styles.contactSection__contacts_item_subtitle}
                    href={"mailto:plumbexer@gmail.com"}
                  >
                    plumbexer@gmail.com
                  </a>
                </div>
              </div>
            </div>
            <Form />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
