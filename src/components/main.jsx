import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import { Login } from "../components/login";
import { Home } from "../components/home";
import { Add } from "../components/add";

export const Main = (props) => {
  const [loggedIn, setLoggedIn] = useState(false);
  function loginScreen() {}
  if (!loggedIn) {
    return (
      <main>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/login" component={Login} />
          <Route path="/new-question" component={Add} />
        </Switch>
      </main>
    );
  }
};
