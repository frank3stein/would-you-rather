import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import { Home } from "./home/home";
import { Add } from "./add";
import { LoginCheck } from "./login-check";
import { useSelector } from "react-redux";
import { Leaderboard } from "./leaderboard";
import { QuestionAnswered } from "./question-answered";
import { QuestionId } from "./question/:id";

export const Main = () => {
  const { questions, users, user } = useSelector((state) => state);
  const loggedIn = user.loggedIn;
  // const [answerUpdate, setAnswerUpdate] = useState(false);
  return (
    <Switch>
      <main>
        <LoginCheck>
          {/* <Route path="/login" component={LoginCheck} /> */}
          <Route
            path="/new-question"
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
            render={(props) => (
              <QuestionId
                {...props}
                // setAnswerUpdate={() => setAnswerUpdate(!answerUpdate)}
              />
            )}
          ></Route>
          <Route path="/home" exact>
            <Home />
          </Route>
          {/* <Route path="">
          <LoginCheck />
        </Route> */}
        </LoginCheck>
      </main>
    </Switch>
  );
};
