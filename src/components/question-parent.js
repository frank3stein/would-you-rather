import React, { useState } from "react";
import { QuestionCard } from "./question-card";
import { QuestionThumbnail } from "./question-thumbnail";
import { QuestionContent } from "./question-content";

export const QuestionParent = (props) => {
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
