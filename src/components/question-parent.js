import React, { useState } from "react";
import { QuestionCard } from "./question-card";
import { QuestionThumbnail } from "./question-thumbnail";

export const QuestionParent = () => {
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
