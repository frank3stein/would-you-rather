import React from "react";
import { QuestionThumbnail } from "./question/question-thumbnail";
import { QuestionContent } from "./question/question-content";

export const Leaderboard = ({ users }) => {
  console.log("Users ", users);
  let usersArray = [];
  // Better to do this sort in the database and just get the first 10 users. Since we do not have a backend here, a little bit of spaghetti object manipulation. Convert to array, sort it, create a new object (reuse the react components) and add information to the objects.
  const objectKeysArray = Object.keys(users);
  for (const key of objectKeysArray) {
    const id = key;
    const numberOfAnswers = Object.keys(users[key].answers).length;
    const numberOfQuestions = users[key].questions.length;
    const total = numberOfAnswers + numberOfQuestions;
    usersArray.push([id, numberOfAnswers, numberOfQuestions, total]);
  }
  let newUsers = {};
  usersArray.sort((a, b) => b[3] - a[3]);
  usersArray.forEach((array) => {
    newUsers[array[0]] = {
      ...users[array[0]],
      numberOfAnswers: array[1],
      numberOfQuestions: array[2],
      total: array[3],
    };
  });

  return (
    <section>
      {Object.keys(newUsers).map((key) => {
        console.log(newUsers, key)
        return <QuestionThumbnail user={newUsers[key]} key={`question-thumbnail-${key}`}>
          <QuestionContent
            context="LEADERBOARD"
            user={newUsers[key]}
            key={`question-content-${key}`}
          />
        </QuestionThumbnail>
      })}
    </section>
  );
};
