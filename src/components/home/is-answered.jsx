import React from "react";
import { QuestionComposite } from "../question/question-composite";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export const IsAnswered = ({ questions, users }) => {
  return (
    <>
      {questions.map((question, index) => {
        console.log(question);
        return (
          <QuestionComposite question={question} index={index} users={users} />
        );
      })}
    </>
  );
};
