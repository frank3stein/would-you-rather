import React from "react";
import { useDispatch } from "react-redux";
import { updateAnswer } from "../store/actions";
import { useHistory } from "react-router-dom";

export const QuestionCard = ({ user, question, users, setAnswered }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  return (
    <>
      <section className="">
        <h3>{`${question.author} asks :`}</h3>
        <h2>Would you rather ? </h2>
        <img src={users[question.author]["avatarURL"]} alt="" />
        <form
          action=""
          onSubmit={(e) => {
            e.preventDefault();

            const selectedInputHTML = Array.prototype.filter.call(
              e.currentTarget.children,
              (element) => element.checked === true
            );
            if (selectedInputHTML.length === 0) {
              return;
            }
            console.log(selectedInputHTML[0].value);
            const result = dispatch(
              updateAnswer({
                id: question.id,
                authedUser: users[user],
                answer: selectedInputHTML[0].value,
              })
            );

            result.then(() => {
              setAnswered();
              history.push("/questions/" + question.id);
            });
          }}
          className="flex-column"
        >
          <input type="radio" name="options" id="optionone" value="optionOne" />
          <label htmlFor="optionone">{question.optionOne.text}</label>
          <input type="radio" name="options" id="optiontwo" value="optionTwo" />
          <label htmlFor="optiontwo">{question.optionTwo.text}</label>
          <button type="submit">Answer</button>
        </form>
      </section>
    </>
  );
};
