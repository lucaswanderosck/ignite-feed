/* eslint-disable react/prop-types */
import styles from "./Avatar.module.css";

export const Avatar = ({ src }) => {
  return <img src={src} className={styles.avatar} alt="" />;
};
