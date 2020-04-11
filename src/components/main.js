import React from "react";
import { Route, Switch } from "react-router-dom";
import { Home } from "./home/home";
import { Add } from "./add";
import { LoginCheck } from "./login-check";
import { useSelector } from "react-redux";
import { Leaderboard } from "./leaderboard";
import { QuestionId } from "./question/question-id";

export const Main = () => {
  const { users, user } = useSelector((state) => state);
  const loggedIn = user.loggedIn;
  return (
    <Switch>
      <main>
        <LoginCheck>
          <Route
            path="/add"
            exact
            render={(props) => <Add {...props} user={loggedIn} />}
          ></Route>

          <Route
            path="/leader-board"
            exact
            render={(props) => {
              return (
                <>
                  <Leaderboard users={users} {...props} />
                </>
              );
            }}
          ></Route>
          <Route
            path="/questions/:id"
            exact
            render={(props) => <QuestionId {...props} />}
          ></Route>
          <Route path="/home" exact>
            <Home />
          </Route>
        </LoginCheck>
      </main>
    </Switch>
  );
};
