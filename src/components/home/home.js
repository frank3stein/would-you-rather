import React, { useState } from "react";
import { useSelector } from "react-redux";
import { IsAnswered } from "./is-answered";
import { css } from "emotion";

const filterObjectPropertiesByKeys = function (object, arrayOfKeys) {
  let includes = [];
  let excludes = [];
  Object.keys(object).forEach((key) => {
    if (arrayOfKeys.includes(key)) {
      includes.push(object[key]);
    } else {
      excludes.push(object[key]);
    }
  });

  return [includes, excludes];
};

export const Home = ({}) => {
  const { questions, users, user } = useSelector((state) => state);
  const loggedIn = user.loggedIn;
  const [isAnswered, setIsAnswered] = useState(true);
  const [answered, unAnswered] = filterObjectPropertiesByKeys(
    questions,
    Object.keys(users[loggedIn].answers)
  );
  return (
    <>
      <section className="flex-column">
        <ul
          className={css`
            display: flex;
            margin-bottom: 1rem;
            justify-content: center;
            align-content: center;
            li {
              padding: 1rem;
              margin-left: 1rem;
              background-color: var(--main-color);
            }
            li:hover {
              text-decoration: underline;
              cursor: pointer;
            }
          `}
        >
          <li
            className={isAnswered ? "answered" : ""}
            onClick={() => setIsAnswered(true)}
          >
            Answered
          </li>
          <li
            className={isAnswered ? "" : "answered"}
            onClick={() => setIsAnswered(false)}
          >
            UnAnswered
          </li>
        </ul>

        <section
          className={css`
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
          `}
        >
          <IsAnswered
            questions={isAnswered ? answered : unAnswered}
            users={users}
          />
        </section>
      </section>
    </>
  );
};
