import React from "react";
import { Link, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { QuestionComposite } from "./question-composite";
// import { updateAnswer } from "../../store/actions";

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
        <>
          <h2>Results</h2>
          <section>
            <p>Would you rather {question.optionOne.text}?</p>
            {authedUserAnswer === "optionOne" ? <p>Your Answer</p> : null}
            <span></span>
            <p></p>
          </section>
          <section>
            <p>Would you rahter {question.optionTwo.text}?</p>
            {authedUserAnswer === "optionTwo" ? <p>Your Answer</p> : null}
            <span></span>
          </section>
        </>
      );
    default:
      return null;
  }
};
