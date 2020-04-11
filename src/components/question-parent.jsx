import React, { useState, useEfe } from "react";
import { QuestionAnswered } from "./question-answered";
import { QuestionCard } from "./question-card";
import { useSelector } from "react-redux";
import { QuestionThumbnail } from "./question-thumbnail";

export const QuestionParent = () => {
  const { user } = useSelector((state) => state);
  const [answered, setAnswered] = useState(false);

  return (
    <>
      {answered ? (
        <QuestionThumbnail>
          <QuestionContent />
        </QuestionThumbnail>
      ) : (
        <QuestionCard setAnswered={(bool) => setAnswered(bool)} {...props} />
      )}
    </>
  );
};
