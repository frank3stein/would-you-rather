import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { login, logout } from "../store/actions.js";
import { useHistory } from "react-router-dom";

export const Login = () => {
  const history = useHistory();
  const { users, user } = useSelector((state) => state);
  const [loggedIn, setLoggedIn] = useState(user.loggedIn);
  // we get the values which are not boolean, as we have fething property with a boolean value
  const userObjectsArray = Object.values(users).filter(
    (value) => typeof value !== "boolean"
  );

  const dispatch = useDispatch();
  useEffect(() => {
    setLoggedIn(user.loggedIn);
  }, [loggedIn]);
  return (
    <section className="flex-column">
      <h2>Please select a user to login</h2>
      <select
        onChange={(e) => {
          if (e.target.value === "") {
            dispatch(logout());
            return;
          }
          dispatch(login(e.target.value));
          history.push("/home");
        }}
      >
        <option></option>
        {userObjectsArray.map((userObject, index) => (
          <option value={userObject.id} key={index}>
            {userObject.name}
          </option>
        ))}
      </select>
    </section>
  );
};
