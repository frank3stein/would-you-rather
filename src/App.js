import React from "react";
import "./App.css";
import "./_DATA.js";
import { Main } from "./components/main";
import { Header } from "./components/header";
import { BrowserRouter as Router } from "react-router-dom";
// import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { _getUsers, _getQuestions } from "./_DATA.js";
// import thunkMiddleware from "redux-thunk";
// import thunk from "redux-thunk";
import { store } from "./store/store";
// const middleware = [];
// const GET_USERS = "GET_USERS";
// const users = (state = {}, action) => {
//   switch (action.type) {
//     case GET_USERS:
//       return state;
//     default:
//       return state;
//   }
// };
// // const initialState = (() => {
// //   return Promise.all([_getUsers(), _getQuestions()]);
// // })();
// const GET_QUESTIONS = "GET_QUESTIONS";
// const questions = async (state = {}, action) => {
//   switch (action.type) {
//     case GET_QUESTIONS:
//       return state;
//     default:
//       return state;
//   }
// };
// const appState = combineReducers({ users, questions });

// const store = createStore(appState, applyMiddleware(thunkMiddleware));
// const unsubscribe = store.subscribe(() => console.log(store.getState()));
// const appState = (state = {}, action) => {
//   return {
//     users: users(state.users, action),
//     questions: questions(state.questions, action),
//   };
// };

function App() {
  return (
    <>
      <Provider store={store}>
        <Router>
          {/* Wrapping Header and Main in with Router as Header has the nav and main renders the components that are routed to */}
          <Header />
          <Main />
        </Router>
      </Provider>
    </>
  );
}

export default App;
