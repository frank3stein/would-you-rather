import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { login, logout } from "../store/actions.js";

export const Login = () => {
  const { users, loggedIn } = useSelector((state) => state);
  const userObjectsArray = Object.values(users).filter(
    (value) => typeof value !== "boolean"
  );
  const dispatch = useDispatch();
  // console.log(userObjectsArray);
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
        }}
      >
        <option></option>
        {userObjectsArray.map((userObject, index) => (
          <option value={userObject.id} key={index}>
            {userObject.name}
          </option>
        ))}
      </select>
      {loggedIn && <p>{loggedIn}</p>}
    </section>
  );
};
