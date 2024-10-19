import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { RiSubtractFill } from "react-icons/ri";

const SingleQuestion = ({ id, title, info, activeId, toggleQuestion }) => {
  //   const [showInfo, setShowInfo] = useState(false);

  // Alternative
  const isActive = id === activeId;

  return (
    <article className="question">
      <header>
        <h5>{title}</h5>
        {/* <button type="button" className="question-btn" onClick={() => setShowInfo(!showInfo)} >
            {showInfo ? <RiSubtractFill /> : <FaPlus />}
        </button> */}

        {/* Alternative  */}
        <button
          type="button"
          className="question-btn"
          onClick={() => toggleQuestion(id)}
        >
          {isActive ? <RiSubtractFill /> : <FaPlus />}
        </button>
      </header>
      {isActive && <p>{info}</p>}
    </article>
  );
};

export default SingleQuestion;
