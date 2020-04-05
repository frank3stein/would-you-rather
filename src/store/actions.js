import { _getUsers, _getQuestions } from "../_DATA";

export const GET_USERS = "GET_USERS";
export const GET_QUESTIONS = "GET_QUESTIONS";
export const REQUEST_USERS = "REQUEST_USERS";
export const REQUEST_QUESTIONS = "REQUEST_QUESTIONS";
export const LOG_IN = "LOG_IN";
export const LOG_OUT = "LOG_OUT";

export function getUsers(users) {
  return {
    type: GET_USERS,
    users,
    isFetchingUsers: false,
  };
}

export function getQuestions(questions) {
  return {
    type: GET_QUESTIONS,
    questions,
    isFetchingQuestions: false,
  };
}

export function requestUsers() {
  return {
    type: REQUEST_USERS,
    isFetchingUsers: true,
  };
}

export function requestQuestions() {
  return {
    type: REQUEST_QUESTIONS,
    isFetchingQuestions: true,
  };
}

export function login(userId) {
  return {
    type: LOG_IN,
    loggedIn: userId,
  };
}

export function logout() {
  return {
    type: LOG_OUT,
    loggedIn: null,
  };
}

export const fetchUsers = () => (dispatch) => {
  dispatch(requestUsers());
  return _getUsers().then((users) => dispatch(getUsers(users)));
};

export const fetchQUestions = () => (dispatch) => {
  dispatch(requestQuestions());
  return _getQuestions().then((questions) => dispatch(getQuestions(questions)));
};
