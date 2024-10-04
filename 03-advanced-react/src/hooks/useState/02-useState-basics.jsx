import { useState } from "react";

const UseStateBasics = () => {
  const [count, setcount] = useState(0);

  const handleClick = () => {
    setcount(count + 1);
  }
  return (
    <div>
      {/* <h2>useState basics</h2> */}

      <h4> You clicked {count} times </h4>
      <button type="button" className="btn" onClick={handleClick} >Increase</button>
    </div>
  );
};

export default UseStateBasics;
