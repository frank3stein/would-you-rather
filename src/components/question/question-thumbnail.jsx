import React from "react";
import { css } from "emotion";

export const QuestionThumbnail = ({ user, ...props }) => {
  return (
    <article
      className={css`
        color: black;
        min-width: 400px;
        background-color: var(--article-background-color);
        text-align: center;
        border: 2px, solid, black;
        margin-bottom: 1rem;
        &:hover {
          background-color: var(--hover-color);
        }
      `}
    >
      <h2>{user.name} asks: </h2>
      <img src={user.avatarURL} alt="" />
      {props.children}
    </article>
  );
};
