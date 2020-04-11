import React from "react";
import { QuestionComposite } from "../question/question-composite";

export const IsAnswered = ({ questions, users }) => {
  return (
    <>
      {questions.map((question, index) => {
        return (
          <QuestionComposite question={question} index={index} users={users} />
        );
      })}
    </>
  );
};
