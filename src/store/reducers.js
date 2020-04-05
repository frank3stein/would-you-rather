import { combineReducers } from "redux";
import {
  GET_QUESTIONS,
  GET_USERS,
  REQUEST_QUESTIONS,
  REQUEST_USERS,
  LOG_IN,
  LOG_OUT,
} from "./actions";

const users = (state = {}, action) => {
  switch (action.type) {
    case GET_USERS:
      return {
        ...state,
        ...action.users,
        isFetchingUsers: action.isFetchingUsers,
      };
    case REQUEST_USERS:
      return { ...state, isFetchingUsers: action.isFetchingUsers };
    default:
      return state;
  }
};

const questions = (state = {}, action) => {
  switch (action.type) {
    case GET_QUESTIONS:
      return {
        ...state,
        ...action.questions,
        isFetchingQuestions: action.isFetchingQuestions,
      };
    case REQUEST_QUESTIONS:
      return { ...state, isFetchingQuestions: action.isFetchingQuestions };
    default:
      return state;
  }
};

const user = (state = null, action) => {
  switch (action.type) {
    case LOG_IN:
      return {
        loggedIn: action.loggedIn,
      };
    case LOG_OUT:
      return {
        loggedIn: action.loggedIn,
      };
    default:
      return state;
  }
};

export const rootReducer = combineReducers({
  users,
  questions,
  user,
});
