'use client'
import { motion } from 'framer-motion';
import styles from './modal.module.scss'; // Путь к вашему CSS/SCSS файлу

type ModalProps = {
  message: string;
  onClose: () => void;
};

const Modal: React.FC<ModalProps> = ({ message, onClose }) => (
    <motion.div 
      className={styles.modal}
      initial={{ y: "-100vh" }}
      animate={{ y: 0 }}
      transition={{ delay: 0.5 }}
    >
      <p>{message}</p>
      <button onClick={onClose}>Close</button>
    </motion.div>
);

export default Modal;
