import { motion } from "motion/react";
import carlosImg from "../assets/carlos.webp";
import styles from "./styles.module.css";
export const MyPhoto = () => {
  return (
    <motion.div
      whileInView={{
        opacity: 1,
      }}
      initial={{
        opacity: 0,
      }}
      transition={{
        duration: 1,
      }}
      className={styles["photo-cont"]}
    >
      <motion.img
        style={{
          filter:
            "drop-shadow(8px 8px 10px gray) grayscale(50%) sepia(60%) hue-rotate(20deg) brightness(70%)",
          maskImage:
            "radial-gradient(circle at 95% 15%, black 10%, transparent)",
          WebkitMaskImage:
            "radial-gradient(circle at 95% 15%, black 10%, transparent)",
        }}
        src={carlosImg}
        width={500}
        alt=""
      />
    </motion.div>
  );
};
