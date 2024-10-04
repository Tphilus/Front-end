import { useState } from "react";
import { data } from "../../data";

const UseStateArray = () => {
  const [people, setPeople] = useState(data);

  const clearItem = (id) => {
    const removePerson = people.filter((el) => el.id !== id)
    setPeople(removePerson);
  }
  const clearAllItems = () => {
    setPeople([])
  }


  return (
    <div>
      <h2>useState array example</h2>

      {people?.map((person) => {
        const { id, name } = person;
        return (
          <div key={id}>
            <h4>{name}</h4>
            <button className="btn" onClick={() => clearItem(id)} >remove</button>
          </div>
        );
      })}
      <button className="btn" style={{marginTop: "2rem"}} onClick={clearAllItems} >Clear All</button>
    </div>
  );
};
All
export default UseStateArray;
