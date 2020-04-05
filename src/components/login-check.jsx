import React from "react";
import { useSelector } from "react-redux";
import { Login } from "./login";

export const LoginCheck = ({ children }) => {
  const { loggedIn } = useSelector((state) => state.user);

  return <>{loggedIn ? children : <Login />}</>;
};
