/* eslint-disable react/prop-types */
import { format, formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";
import { ChangeEvent, FormEvent, InvalidEvent, useState } from "react";
import { Avatar } from "./Avatar";
import { Comment } from "./Comment";
import styles from "./Post.module.css";

interface Author {
  avatarUrl: string;
  name: string;
  role: string;
}

interface Content {
  type: "paragraph" | "link";
  content: string;
}

export interface PostType {
  id: number;
  author: Author;
  publishedAt: Date;
  content: Content[];
}

interface PostProps {
  post: PostType;
}

export const Post = ({ post }: PostProps) => {
  const [comments, setComments] = useState(["Muito Bom!"]);
  const [newCommentText, setNewCommentText] = useState("");

  const formattedDate = format(post.publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBR,
  });

  const relativeDateToNow = formatDistanceToNow(post.publishedAt, {
    locale: ptBR,
    addSuffix: true,
  });

  const handleCreateNewComment = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setComments([...comments, newCommentText]);

    setNewCommentText("");
  };

  const handleNewCommentChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    event.target.setCustomValidity("");
    setNewCommentText(event.target.value);
  };

  const deleteComment = (comment: string) => {
    const commentsWithoutDeleteOne = comments.filter(
      (item) => item !== comment
    );
    setComments(commentsWithoutDeleteOne);
  };

  const handleCommentInvalid = (event: InvalidEvent<HTMLTextAreaElement>) => {
    event.target.setCustomValidity("Por favor, escreva um comentário");
  };

  const isNewEmptyComment = newCommentText.length === 0;

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={post.author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{post.author.name}</strong>
            <span>{post.author.role}</span>
          </div>
        </div>
        <time title={formattedDate} dateTime={post.publishedAt.toISOString()}>
          {relativeDateToNow}
        </time>
      </header>
      <div className={styles.content}>
        {post.content.map((item, index) => {
          if (item.type === "paragraph") {
            return <p key={index}>{item.content}</p>;
          } else if (item.type === "link") {
            return (
              <p key={index}>
                <a href="">{item.content}</a>
              </p>
            );
          }
        })}
      </div>
      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea
          required
          onInvalid={handleCommentInvalid}
          placeholder="Deixe seu comentário"
          name="commentText"
          onChange={handleNewCommentChange}
          value={newCommentText}
        />
        <footer>
          <button type="submit" disabled={isNewEmptyComment}>
            Publicar
          </button>
        </footer>
      </form>
      <div className={styles.commentList}>
        {comments.map((comment, index) => {
          return (
            <Comment
              key={index}
              content={comment}
              OnDeleteComment={deleteComment}
            />
          );
        })}
      </div>
    </article>
  );
};
