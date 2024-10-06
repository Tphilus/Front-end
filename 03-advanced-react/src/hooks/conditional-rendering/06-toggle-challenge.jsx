import { useState } from "react";

const ToggleChallenge = () => {
  const [shortAlert, setShowAlert] = useState(false);

  const toggleAlert = () => {
    // if (shortAlert) {
    //   setShowAlert(false);
    //   return;
    // }
    // setShowAlert(true);
    setShowAlert(!shortAlert)
  };
  return (
    <div>
      <button className="btn" onClick={toggleAlert}>
        toggle
      </button>
      {shortAlert && <Alert />}
    </div>
  );
};

const Alert = () => {
  return <div className=" alert alert-danger">hello world</div>;
};

export default ToggleChallenge;
