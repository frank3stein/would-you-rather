import { combineReducers } from "redux";
import {
  GET_QUESTIONS,
  GET_USERS,
  REQUEST_QUESTIONS,
  REQUEST_USERS,
  LOG_IN,
  LOG_OUT,
  ADD_QUESTION_TO_USER,
  ADD_QUESTION,
  IS_FECTHING_USERS,
  IS_FETCHING_QUESTIONS,
  DONE_FETCHING_QUESTIONS,
  DONE_FETCHING_USERS,
  // UPDATE_QUESTION_ANSWER,
  ADD_ANSWER_TO_USER,
} from "./actions";

const users = (state = {}, action) => {
  switch (action.type) {
    case GET_USERS:
      return {
        ...state,
        ...action.users,
      };
    case REQUEST_USERS:
      return { ...state, isFetchingUsers: action.isFetchingUsers };
    case ADD_QUESTION_TO_USER:
      return {
        ...state,
        [action.question.author]: {
          ...state[action.question.author],
          questions: state[action.question.author].questions.concat([
            action.question.id,
          ]),
        },
      };
    case ADD_ANSWER_TO_USER:
      return {
        ...state,
        [action.author]: {
          ...state[action.author],
          answers: {
            ...state[action.author]["answers"],
            [action.id]: action.answer,
          },
        },
      };
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
      };
    case REQUEST_QUESTIONS:
      return { ...state, isFetchingQuestions: action.isFetchingQuestions };
    case ADD_QUESTION:
      return {
        ...state,
        [action.question.id]: action.question,
      };
    default:
      return state;
  }
};

const fetching = (
  state = { isFetchingQuestions: null, isFetchingUsers: null },
  action
) => {
  switch (action.type) {
    case IS_FECTHING_USERS:
      return {
        ...state,
        isFetchingUsers: action.isFetchingUsers,
      };
    case DONE_FETCHING_USERS:
      return {
        ...state,
        isFetchingUsers: action.isFetchingUsers,
      };
    case IS_FETCHING_QUESTIONS:
      return {
        ...state,
        isFetchingQuestions: action.isFetchingQuestions,
      };
    case DONE_FETCHING_QUESTIONS:
      return {
        ...state,
        isFetchingQuestions: action.isFetchingQuestions,
      };
    default:
      return state;
  }
};

const user = (state = { loggedIn: null }, action) => {
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
  fetching,
  user,
});
