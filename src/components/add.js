import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { savingQuestion } from "../store/actions";
import { useHistory } from "react-router-dom";
import { css } from "emotion";

export const Add = ({ user }) => {
  const [clicked, setClicked] = useState(false);
  const history = useHistory();
  const dispatch = useDispatch();
  const submit = (e) => {
    setClicked(true);
    e.preventDefault();
    const question = dispatch(
      savingQuestion({
        optionOneText: e.target.inputone.value,
        optionTwoText: e.target.inputtwo.value,
        author: user,
      })
    );

    e.currentTarget.reset();
    question.then((question) => {
      setClicked(false);
      history.push("/questions/" + question.id);
    });
  };
  return (
    <section
      className="flex-column"
      css={css`
        color: white;
      `}
    >
      <h1>Would you rather?</h1>
      <form className="flex-column inline-block-children" onSubmit={submit}>
        <label htmlFor="inputOne">Enter the first choice:</label>
        <input type="text" inputone="inputone" id="inputone" required />
        <h3>OR</h3>
        <label htmlFor="inputOne">Enter the second choice:</label>
        <input type="text" inputtwo="inputtwo" id="inputtwo" required />
        <button disabled={clicked} type="submit">
          Submit
        </button>
      </form>
    </section>
  );
};
