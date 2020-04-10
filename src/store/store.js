import thunkMiddleware from "redux-thunk";
import { createLogger } from "redux-logger";
import { createStore, applyMiddleware } from "redux";
import { fetchQuestions, fetchUsers } from "./actions";
import { rootReducer } from "./reducers";

const loggerMiddleware = createLogger();

export const store = createStore(
  rootReducer,
  applyMiddleware(
    thunkMiddleware, // lets us dispatch() functions and use async code
    loggerMiddleware // neat middleware that logs actions
  )
);

store.dispatch(fetchUsers());
store.dispatch(fetchQuestions());
