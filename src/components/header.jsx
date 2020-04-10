import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../store/actions.js";

export const Header = (props) => {
  const { users, user } = useSelector((state) => state);
  const loggedIn = user.loggedIn;
  const dispatch = useDispatch();
  const menuItems = ["Home", "New Question", "Leader Board"];

  return (
    <header>
      <h1>Would you rather?</h1>
      <nav>
        <ul className="navigation">
          {menuItems.map((item, index) => (
            <Link
              to={
                `/` +
                // Here we check if there is space in the menu link, if there is, instead of space we put dash and lowercase the characters for common route naming convention.
                (item.split(" ").length > 1
                  ? item.split(" ").join("-").toLowerCase()
                  : item.toLowerCase())
              }
              key={index}
            >
              <li className="navigation-item" key={index}>
                {item}
              </li>
            </Link>
          ))}

          {/* In order to add login or logut with username to the end of the other menu items we customly write it. */}
          {loggedIn ? (
            <>
              <Link to="home">
                <li className="navigation-item" key={users[loggedIn].name}>
                  {users[loggedIn].name}
                </li>{" "}
              </Link>
              <li
                className="navigation-item"
                key="logout"
                onClick={() => dispatch(logout())}
              >
                Logout
              </li>
            </>
          ) : (
            <Link to="login">
              <li className="navigation-item" key="login">
                Login
              </li>
            </Link>
          )}
        </ul>
      </nav>
    </header>
  );
};
