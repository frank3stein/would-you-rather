import React, { useState } from "react";
import { useRouteMatch } from "react-router-dom";
import { QuestionCard } from "../question-card";
import { useSelector } from "react-redux";
import { ResultCard } from "../results-card";

export const QuestionId = ({ setAnswerUpdate }) => {
  const { params } = useRouteMatch("/questions/:id");
  const { questions, users, user } = useSelector((state) => state);
  console.log(params.id);
  const question = questions[params.id];
  const author = question.author;
  //   question.optionOne.includes(user.loggedIn) ||
  //     question.OptionTwo.includes(user.LoggedIn);
  const isOptionOneAuthedUserAnswer = question.optionOne.votes.filter(
    (key) => key === user.loggedIn
  ).length;
  //   const isOptionOneAuthedUserAnswer = question.optionOne.votes.includes(
  //     user.loggedIn
  //   );
  const isOptionTwoAuthedUserAnswer = question.optionTwo.votes.filter(
    (key) => key === user.loggedIn
  ).length;
  //   const isOptionTwoAuthedUserAnswer = question.optionTwo.votes.includes(
  //     user.loggedIn
  //   );

  const [answered, setAnswered] = useState(
    isOptionOneAuthedUserAnswer
      ? isOptionOneAuthedUserAnswer
      : isOptionTwoAuthedUserAnswer
  );
  const authedUserAnswer = (() => {
    if (isOptionOneAuthedUserAnswer) {
      return "optionOne";
    } else if (isOptionTwoAuthedUserAnswer) {
      return "optionTwo";
    } else {
      return null;
    }
  })();
  console.log(
    "Logged in: ",
    user.loggedIn,
    "Answered: ",
    answered,
    "Option one: ",
    isOptionOneAuthedUserAnswer,
    "Option two: ",
    isOptionTwoAuthedUserAnswer,
    "Option two votes :",
    question.optionTwo.votes,
    question.optionTwo.votes.includes(user.LoggedIn),
    !!question.optionTwo.votes.filter((key) => key === user.loggedIn)
  );
  return answered ? (
    <ResultCard
      question={question}
      user={users[author]}
      authedUserAnswer={authedUserAnswer}
    />
  ) : (
    <QuestionCard
      question={question}
      user={user.loggedIn}
      users={users}
      setAnswered={() => setAnswered(true)}
      setAnswerUpdate={setAnswerUpdate}
    />
  );
  //   return (
  //     <>
  //       <h3>Asked by Sarah Edo</h3>
  //       <section className="answered">
  //         <section className="answer-results flex-column">
  //           <article>
  //             <p>Would you rahter optionone ?</p>
  //             <p>percentage bar</p>
  //             <p>number of votes / number of total votes</p>
  //             <p>your choice</p>
  //           </article>

  //           <article>
  //             <p>Would you rahter optionone ?</p>
  //             <p>percentage bar</p>
  //             <p>number of votes / number of total votes</p>
  //           </article>
  //         </section>
  //       </section>
  //     </>
  //   );
};
