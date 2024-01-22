import igniteLogo from "../assets/images/ignite-logo.svg";
import styles from "./Header.module.css";

export const Header = () => {
  return (
    <header className={styles.header}>
      <img src={igniteLogo} alt="Ignite Logotipo" />
      <h1>Ignite Feed</h1>
    </header>
  );
};
