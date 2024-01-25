/* eslint-disable react/prop-types */
import { ThumbsUp, Trash } from "phosphor-react";
import { useState } from "react";
import avatar2 from "../assets/images/avatar2.png";
import { Avatar } from "./Avatar";
import styles from "./Comment.module.css";

interface Props {
  content: string;
  OnDeleteComment: (comment: string) => void;
}

export const Comment = ({ content, OnDeleteComment }: Props) => {
  const [likesCount, setLikesCount] = useState(0);

  const handleLikeClick = () => {
    setLikesCount(() => likesCount + 1);
  };

  const handleDeleteComment = () => {
    OnDeleteComment(content);
  };
  return (
    <div className={styles.comment}>
      <Avatar src={avatar2} />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Devon Lane</strong>
              <time>Cerca de 2h atrás</time>
            </div>
            <button title="Deletar comentário" onClick={handleDeleteComment}>
              <Trash size={24} />
            </button>
          </header>
          <p>{content}</p>
        </div>
        <footer>
          <button onClick={handleLikeClick}>
            <ThumbsUp />
            Aplaudir<span>{likesCount}</span>
          </button>
        </footer>
      </div>
    </div>
  );
};
