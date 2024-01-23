import { PencilLine } from "phosphor-react";
import cover from "../assets/images/cover.png";
import { Avatar } from "./Avatar";
import styles from "./Sidebar.module.css";

export const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
      <img src={cover} className={styles.cover} alt="" />
      <div className={styles.profile}>
        <Avatar src="https://github.com/lucaswanderosck.png" />
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
