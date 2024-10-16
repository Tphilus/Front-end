import React, { act, useReducer } from "react";
import { data, people } from "../../data";
import { REMOVE_LIST, CLEAR_LIST, RESET_LIST } from "./action";
import reducer from "./reducer";

const defaultState = {
  people: data,
  isLoading: false,
};



const ReducerBasics = () => {
  const [state, dispatch] = useReducer(reducer, defaultState);

  const removeItem = (id) => {
    dispatch({ type: REMOVE_LIST, payload: { id } });
  };

  const clearList = () => {
    dispatch({ type: "CLEAR_LIST" });
  };

  const resetList = () => {
    dispatch({ type: "RESET_LIST" });
  };

  return (
    <div>
      {state.people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id} className="item">
            <h4>{name}</h4>
            <button onClick={() => removeItem(id)}>remove</button>
          </div>
        );
      })}
      <button className="btn" style={{ marginTop: "2rem" }} onClick={clearList}>
        clear items
      </button>
    </div>
  );
};

export default ReducerBasics;
