import React, { useContext } from "react";
import { useRouteError } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";

const DisplayError = () => {
  const error = useRouteError();
  const { logOut, user } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then((res) => {})
      .then((err) => console.error(err));
  };

  return (
    <div>
      <p className="text-red-500">something went wrong</p>
      <p className="text-red-400">{error.statusText || error.message}</p>
      <h2>to solve the problem please logout <button onClick={handleLogOut}>logout</button> and sign in again</h2>
    </div>
  );
};

export default DisplayError;
