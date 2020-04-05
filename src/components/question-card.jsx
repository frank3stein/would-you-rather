import React from "react";
import { useSelector } from "react-redux";

const QuestionCard = ({ question }) => {
  const state = useSelector((state) => state);
  return (
    <>
      <h3>{`${question.author} asks :`}</h3>
      <section>
        <img src={question.image} alt="" />
      </section>
    </>
  );
};
