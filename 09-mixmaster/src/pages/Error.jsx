import React from "react";
import Wrapper from "../assets/wrappers/ErrorPage";
import img from "../assets/not-found.svg";
import { Link, useRouteError } from "react-router-dom";
const Error = () => {
  const error = useRouteError();
  console.log(error);
  if (error.status === 404) {
    return (
      <Wrapper>
        <div>
          <img src={img} alt="not found" />
          <h3>Ohh!</h3>
          <p>W can't seem to find the page you are looking for</p>
          <Link to="/">back home</Link>
        </div> 
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <div>
        <h2>something went wrong</h2>
      </div>
    </Wrapper>
  );
};

export default Error;
