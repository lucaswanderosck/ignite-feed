/* eslint-disable react/prop-types */
import { format, formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";
import { Avatar } from "./Avatar";
import { Comment } from "./Comment";
import styles from "./Post.module.css";

export const Post = ({ author, publishedAt, content }) => {
  const formattedDate = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBR,
  });

  const relativeDateToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  });

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} alt="" />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>
        <time title={formattedDate} dateTime={publishedAt.toISOString()}>
          {relativeDateToNow}
        </time>
      </header>
      <div className={styles.content}>
        {content.map((item, index) => {
          if (item.type === "paragraph") {
            return <p key={index}>{item.content}</p>;
          } else if (item.type === "link") {
            return (
              <a href="" key={index}>
                {item.content}
              </a>
            );
          }
        })}
      </div>
      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea placeholder="Deixe seu comentário" />
        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>
      <div className={styles.commentList}>
        <Comment />
        <Comment />
      </div>
    </article>
  );
};
