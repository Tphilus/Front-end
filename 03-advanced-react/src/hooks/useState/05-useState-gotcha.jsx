import { useState } from "react";

const UseStateGotcha = () => {
  const [value, setvalue] = useState(0);

  const handleClick = () => {
    // setvalue((currentState) => currentState + 1);
    setTimeout(() => {
      setvalue((currentState) => currentState + 1)
    }, 3000)
  }
  return <div>
    {/* <h2>useState "gotcha"</h2> */}
    <h1>{value}</h1>
    <button onClick={handleClick} className="btn" >increase</button>
  </div>;
};

export default UseStateGotcha;
