import React from "react";
import { QuestionComposite } from "../question/question-composite";

export const IsAnswered = ({ questions, users }) => {
  return (
    <>
      {questions.map((question) => {
        return (
          <QuestionComposite question={question} index={question.id} key={question.id} users={users} />
        );
      })}
    </>
  );
};
