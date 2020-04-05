import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export const Header = (props) => {
  const user = { name: "Test" };
  const loggedIn = false;
  const menuItems = ["Home", "New Question", "Leader Board", "Login"];
  if (loggedIn) {
    menuItems[3] = user.name;
    menuItems[4] = "Logout";
  }
  return (
    <header>
      <h1>Would you rather?</h1>
      <nav>
        <ul className="navigation">
          {menuItems.map((item, index) => (
            <Link
              to={
                // Here we check if there is space in the menu link, if there is, instead of space we put dash and lowercase the characters for common route naming convention.
                item.split(" ").length > 1
                  ? item.split(" ").join("-").toLowerCase()
                  : item.toLowerCase()
              }
              key={index}
            >
              <li className="navigation-item" key={index}>
                {item}
              </li>
            </Link>
          ))}
        </ul>
      </nav>
    </header>
  );
};
