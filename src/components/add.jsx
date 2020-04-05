import React from "react";

export const Add = () => {
  const submitNewQuestion = () => {};
  return (
    <section className="flex-column">
      <h1>Would you rather?</h1>
      <form className="flex-column">
        <label htmlFor="question">Enter your question:</label>
        <input type="text" question="question" id="question" required />
        <label htmlFor="inputOne">Enter the first choice:</label>
        <input type="text" inputone="inputone" id="inputone" required />
        <label htmlFor="inputOne">Enter the second choice:</label>
        <input type="text" inputtwo="inputtwo" id="inputtwo" required />
      </form>
    </section>
  );
};
