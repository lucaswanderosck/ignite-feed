import { PencilLine } from "phosphor-react";
import cover from "../assets/images/cover.png";
import styles from "./Sidebar.module.css";

export const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
      <img src={cover} className={styles.cover} alt="" />
      <div className={styles.profile}>
        <img
          src="https://github.com/lucaswanderosck.png"
          className={styles.avatar}
          alt=""
        />
        <strong>Lucas</strong>
        <span>Javascript Developer</span>
      </div>
      <footer>
        <a href="#">
          <PencilLine size={20} />
          Edite seu Perfil
        </a>
      </footer>
    </aside>
  );
};
