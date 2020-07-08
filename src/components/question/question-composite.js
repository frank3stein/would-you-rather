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
      key={`question-thumbnail-${index}`}
      question={question}
      user={users[question.author]}
    >
      <QuestionContent question={question} key={`question-content-${index}`} context={context} />
    </QuestionThumbnail>
  );
};
