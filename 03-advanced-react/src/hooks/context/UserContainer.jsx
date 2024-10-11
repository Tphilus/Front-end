// import React from "react";

import { useContext } from "react";
import { NavbarContext, useAppContext } from "./Navbar";

// const UserContainer = ({ user, logout }) => {
//   return (
//     <div className="user-container">
//       {user ? (
//         <>
//           <p> Hello There, {user?.name?.toUpperCase()} </p>
//           <button className="btn" onClick={logout}>
//             {" "}
//             logout{" "}
//           </button>
//         </>
//       ) : (
//         <p>Please Login</p>
//       )}
//     </div>
//   );
// };

// export default UserContainer;



const UserContainer = () => {
// const {user, logout} = useContext(NavbarContext)
const {user, logout} = useAppContext()

  return (
    <div className="user-container">
      {user ? (
        <>
          <p> Hello There, {user?.name?.toUpperCase()} </p>
          <button className="btn" onClick={logout}>
            {" "}
            logout{" "}
          </button>
        </>
      ) : (
        <p>Please Login</p>
      )}
    </div>
  );
};

export default UserContainer;
