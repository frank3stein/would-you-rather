import React from "react";
import { useSelector } from "react-redux";
import { QuestionId } from "./question-id";
import { useRouteMatch } from "react-router-dom";
import { NotFound } from "../notfound";

export const QuestionIdParent = () => {
  const { params } = useRouteMatch("/questions/:id");
  const { questions, users, user } = useSelector((state) => state);
  const question = questions[params.id];
  return questions[params.id] ? (
    <QuestionId question={question} user={user} users={users} />
  ) : (
    <NotFound />
  );
};
