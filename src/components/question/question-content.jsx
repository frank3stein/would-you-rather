import React from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { css } from "emotion";

export const QuestionContent = ({
  question,
  context,
  user,
  authedUserAnswer = null,
}) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const users = useSelector((state) => state);
  switch (context) {
    //todo: move the string values to variables
    case "MAIN_PAGE":
      return (
        <>
          <p>...{question.optionOne.text.split("").slice(0, 8).join("")}...</p>

          <button
            onClick={(e) => {
              e.preventDefault();
              console.log(question.id);
              history.push(`/questions/${question.id}`);
            }}
          >
            View poll
          </button>
        </>
      );
    case "LEADERBOARD":
      return (
        <>
          <p>Questions: {user.numberOfQuestions}</p>
          <p>Answers: {user.numberOfAnswers}</p>
          <p>Total Points: {user.total}</p>
        </>
      );
    case "RESULTS":
      return (
        <div className={css``}>
          <h2
            className={css`
              text-align: left;
              font-size: 1.4rem;
              font-weight: bold;
              padding-left: 0.2rem;
              margin-bottom: 0.3rem;
            `}
          >
            Results
          </h2>
          <p>Would you rather ... ?</p>
          <section
            className={css`
              ${authedUserAnswer === "optionOne"
                ? `background-color:var(--hover-color)`
                : null}
            `}
          >
            {authedUserAnswer === "optionOne" ? <p>Your Answer</p> : null}
            <p>{question.optionOne.text}</p>
            <span></span>
            <p></p>
          </section>
          <section
            className={css`
              ${authedUserAnswer === "optionTwo"
                ? `background-color:var(--hover-color)`
                : null}
            `}
          >
            {authedUserAnswer === "optionTwo" ? <p>Your Answer</p> : null}
            <p>{question.optionTwo.text}</p>
            <span></span>
          </section>
        </div>
      );
    default:
      return null;
  }
};
