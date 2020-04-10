import React, { useState, useEfe } from "react";
import { QuestionAnswered } from "./question-answered";
import { QuestionCard } from "./question-card";
import { useSelector } from "react-redux";
import { QuestionThumbnail } from "./question-thumbnail";

//questionId or the question object ?
export const QuestionParent = ({ questionId, user }) => {
  //   return <p>asdas</p>;
  const { users, questions, user } = useSelector((state) => state);
  const question = questions["8xf0y6ziyjabvozdd253nd"];
  const [answered, setAnswered] = useState(false);
  console.log(users);
  if (
    users[user.loggedIn].answers["8xf0y6ziyjabvozdd253nd"] &&
    answered === false
  ) {
    setAnswered(true);
  }
  const props = {
    question,
    user: users[user.loggedIn],
  };
  return (
    <>
      {answered ? (
        <QuestionThumbnail>
          <QuestionContent />
        </QuestionThumbnail>
      ) : (
        // <QuestionAnswered {...props} />
        <QuestionCard setAnswered={(bool) => setAnswered(bool)} {...props} />
      )}
    </>
  );
};
