import React from "react";
import { QuestionContent } from "./question-content";
import { QuestionThumbnail } from "./question-thumbnail";

export const QuestionComposite = ({
  index,
  question,
  users,
  context = "MAIN_PAGE",
}) => {
  return (
    <QuestionThumbnail
      key={index}
      question={question}
      user={users[question.author]}
    >
      <QuestionContent question={question} key={index} context={context} />
    </QuestionThumbnail>
  );
};
