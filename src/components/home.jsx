import React, { useState } from "react";
import { useSelector } from "react-redux";
import { LoginCheck } from "./login-check";

export const Home = (props) => {
  const { questions } = useSelector((state) => state);
  //   const { isLoggedIn, setIsloggedIn } = useState(true);
  // console.log(questions);
  return (
    <>
      <LoginCheck>
        {Object.values(questions).map((question, index) => {
          //   console.log(question);
          return <li key={index}>{question.author}</li>;
        })}
      </LoginCheck>
      {/* {Object.values(questions).map((question) => {
        console.log(question);
        return <li>{question.author}</li>;
      })} */}
    </>
  );
};
