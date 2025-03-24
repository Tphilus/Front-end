import React from "react";
import { useRouteError } from "react-router-dom";

const ErrorElement = () => {
  const error = useRouteError();
  console.log("Error Element", error);

  return <div className="font-bold text-4xl">There was an error...</div>;
};

export default ErrorElement;
