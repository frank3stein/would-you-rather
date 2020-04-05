import thunkMiddleware from "redux-thunk";
import { createLogger } from "redux-logger";
import { createStore, applyMiddleware } from "redux";
import { fetchQUestions, fetchUsers, login, logout } from "./actions";
import { rootReducer } from "./reducers";

const loggerMiddleware = createLogger();

export const store = createStore(
  rootReducer,
  applyMiddleware(
    thunkMiddleware, // lets us dispatch() functions
    loggerMiddleware // neat middleware that logs actions
  )
);

store.dispatch(fetchUsers());
store.dispatch(fetchQUestions());
store.dispatch(login("sarahedo"));
setTimeout(() => {
  store.dispatch(logout());
}, 3000);
