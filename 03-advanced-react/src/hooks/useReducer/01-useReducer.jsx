import React, { useReducer } from "react";
import { data, people } from "../../data";

const defaultState = {
  people: data,
  isLoading: false,
};

const CLEAR_LIST = 'CLEAR_LIST';
const RESET_LIST = 'RESET_LIST';
const REMOVE_LIST = 'REMOVE_LIST';


const reducer = (state, action) => {
  if (action.type === 'CLEAR_LIST') {
    return {...state, people: []}
  }

  // return state;  
  throw new Error(`No matching "${action.type}" - action type`)
}

const ReducerBasics = () => {
 const [state, dispatch] = useReducer(reducer, defaultState);
console.log(state);


  // const [people, setPeople] = React.useState(data);

  const removeItem = (id) => {
    // let newPeople = people.filter((person) => person.id !== id);
    // setPeople(newPeople);
  };

  const clearList = () => {
    dispatch({type: 'CLEAR_LIST'});
  }

  const resetList = () => {
    dispatch({type: 'RESET_LIST'})
  }

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
      <button
        className="btn"
        style={{ marginTop: "2rem" }}
        onClick={clearList}
      >
        clear items
      </button>
    </div>
  );
};

export default ReducerBasics;
