import React from "react";
import { useHistory } from "react-router-dom";
import { css } from "emotion";
import styled from "@emotion/styled";

const InNumbers = styled.span`
  font-size: 1.5rem;
`;

const YourAnswer = styled.p`
  margin-top: 1rem;
  background-color: var(--hover-color);
`;

export const QuestionContent = ({
  question,
  context,
  user,
  authedUserAnswer = null,
}) => {
  const history = useHistory();
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
      const numberOfAnswers =
        question.optionOne.votes.length + question.optionTwo.votes.length;
      const numberOfOptionOneAnswers = question.optionOne.votes.length;
      const numberOfOptionTwoAnswers = question.optionTwo.votes.length;
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
              margin-top: .5rem;
            `}
          >
            {authedUserAnswer === "optionOne" ? (
              <YourAnswer>Your Answer</YourAnswer>
            ) : null}
            <p>{question.optionOne.text}</p>
            <InNumbers>
              {numberOfOptionOneAnswers + ` / ` + numberOfAnswers}
            </InNumbers>
            <p></p>
          </section>
          <section
            className={css`
              ${authedUserAnswer === "optionTwo"
                ? `background-color:var(--hover-color)`
                : null}
              margin-top: .5rem;
            `}
          >
            {authedUserAnswer === "optionTwo" ? (
              <YourAnswer>Your Answer</YourAnswer>
            ) : null}
            <p>{question.optionTwo.text}</p>
            <InNumbers>
              {numberOfOptionTwoAnswers + ` / ` + numberOfAnswers}
            </InNumbers>
          </section>
        </div>
      );
    default:
      return null;
  }
};
