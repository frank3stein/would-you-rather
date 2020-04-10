import React, { useEffect, useState } from "react";
import "./App.css";
import "./_DATA.js";
import { Main } from "./components/main";
import { Header } from "./components/header";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
// import { _getUsers, _getQuestions } from "./_DATA.js";
import { store } from "./store/store";

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
