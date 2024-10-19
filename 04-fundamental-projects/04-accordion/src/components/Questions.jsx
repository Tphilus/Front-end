import React from "react";
import SingleQuestion from "./SingleQuestion";

const Questions = ({ questions, activeId, toggleQuestion }) => {
  return (
    <section className="container">
      <h1>Question</h1>
      {questions.map((question) => {
        return (
          <SingleQuestion
            key={question.id}
            {...question}
            activeId={activeId} // Alternative
            toggleQuestion={toggleQuestion} // Alternative
          />
        );
      })}
    </section>
  );
};

export default Questions;
