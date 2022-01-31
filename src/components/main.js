import React from "react";
import { Route, Switch } from "react-router-dom";
import { Home } from "./home/home";
import { Add } from "./add";
import { LoginCheck } from "./login-check";
import { useSelector } from "react-redux";
import { Leaderboard } from "./leaderboard";
import { QuestionIdParent } from "./question/question-id-parent";
import { NotFound } from "./notfound";

export const Main = () => {
  const { users, user } = useSelector((state) => state);
  const loggedIn = user.loggedIn;
  return (
    <main>
      <LoginCheck>
        <Switch>
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
            render={(props) => {
              return <QuestionIdParent {...props} />;
            }}
          ></Route>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/home" exact>
            <Home />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </LoginCheck>
    </main>
  );
};
