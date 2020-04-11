import React from "react";
import { QuestionThumbnail } from "./question/question-thumbnail";
import { QuestionContent } from "./question/question-content";

export const ResultCard = ({ question, user, authedUserAnswer }) => {
  return (
    <QuestionThumbnail user={user}>
      <QuestionContent
        context="RESULTS"
        question={question}
        user={user}
        authedUserAnswer={authedUserAnswer}
      ></QuestionContent>
    </QuestionThumbnail>
  );
};
