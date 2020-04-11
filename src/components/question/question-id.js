import React, { useState } from "react";
import { useRouteMatch } from "react-router-dom";
import { QuestionCard } from "../question-card";
import { useSelector } from "react-redux";
import { ResultCard } from "../results-card";

export const QuestionId = ({ setAnswerUpdate }) => {
  const { params } = useRouteMatch("/questions/:id");
  const { questions, users, user } = useSelector((state) => state);
  const question = questions[params.id];
  const author = question.author;

  // const isOptionOneAuthedUserAnswer = question.optionOne.votes.filter(
  //   (key) => key === user.loggedIn
  // ).length;
  const isOptionOneAuthedUserAnswer = question.optionOne.votes.includes(
    user.loggedIn
  );
  // const isOptionTwoAuthedUserAnswer = question.optionTwo.votes.filter(
  //   (key) => key === user.loggedIn
  // ).length;
  const isOptionTwoAuthedUserAnswer = question.optionTwo.votes.includes(
    user.loggedIn
  );

  const [answered, setAnswered] = useState(
    isOptionOneAuthedUserAnswer
      ? isOptionOneAuthedUserAnswer
      : isOptionTwoAuthedUserAnswer
  );
  const authedUserAnswer = (() => {
    if (isOptionOneAuthedUserAnswer) {
      return "optionOne";
    } else if (isOptionTwoAuthedUserAnswer) {
      return "optionTwo";
    } else {
      return null;
    }
  })();

  return answered ? (
    <ResultCard
      question={question}
      user={users[author]}
      authedUserAnswer={authedUserAnswer}
    />
  ) : (
    <QuestionCard
      question={question}
      user={user.loggedIn}
      users={users}
      setAnswered={() => setAnswered(true)}
      setAnswerUpdate={setAnswerUpdate}
    />
  );
};
