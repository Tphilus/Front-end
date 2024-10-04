import { useState } from "react";

const UseStateObject = () => {
  // const [name, setName] = useState("Tim");
  // const [age, setAge] = useState(20);
  // const [hobby, setHobby] = useState("Read books");
  const [person, setPerson] = useState({
    name: "Tim",
    age: 24,
    hobby: "Read Books"
  })

  const  handleClick = () => {
    // setName('John');
    // setAge(40);
    // setHobby('Coding..')

    // setPerson({
    //   name: "John",
    //   age: 40,
    //   hobby: "Coding..."
    // })
    
    setPerson({...person, name: 'Francis'})
  }

  return (
    <div>
      {/* <h2>useState object example</h2> */}
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h3>Enjoys: {person.hobby}</h3>

      <button className="btn" onClick={handleClick} >show John</button>
    </div>
  );
};

export default UseStateObject;
