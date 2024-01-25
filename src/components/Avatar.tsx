/* eslint-disable react/prop-types */
import { ImgHTMLAttributes } from "react";
import styles from "./Avatar.module.css";

interface Props extends ImgHTMLAttributes<HTMLImageElement> {}

export const Avatar = ({ src, alt, ...props }: Props) => {
  return <img {...props} src={src} className={styles.avatar} alt={alt} />;
};
