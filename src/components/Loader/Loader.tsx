'use client'
import { motion } from 'framer-motion';
import styles from './loader.module.scss';

const Loader: React.FC = () => (
  <motion.div 
    className={styles.loader}
    initial={{ scale: 0.5 }}
    animate={{ rotate: 360, scale: 1 }}
    transition={{
      rotate: { duration: 1, repeat: Infinity, ease: "linear" },
      scale: { duration: 0.5 }
    }}
  />
);

export default Loader;