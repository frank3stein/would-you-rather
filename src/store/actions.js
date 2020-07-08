import {
  _getUsers,
  _getQuestions,
  _saveQuestion,
  _saveQuestionAnswer,
} from "../_DATA";

export const GET_USERS = "GET_USERS";
export const GET_QUESTIONS = "GET_QUESTIONS";
export const REQUEST_USERS = "REQUEST_USERS";
export const REQUEST_QUESTIONS = "REQUEST_QUESTIONS";
export const LOG_IN = "LOG_IN";
export const LOG_OUT = "LOG_OUT";
export const CREATE_QUESTION = "CREATE_QUESTION";
export const ADD_QUESTION_TO_USER = "ADD_QUESTION_TO_USER";
export const ADD_QUESTION = "ADD_QUESTION";
export const UPDATE_QUESTION_ANSWER = "UPDATE_QUESTION_ANSWER";
export const UPDATE_QUESTION_ANSWER_USER = "UPDATE_QUESTION_ANSWER_USER";
export const IS_FETCHING_QUESTIONS = "IS_FETCHING_QUESTIONS";
export const IS_FECTHING_USERS = "IS_FETCHING_USERS";
export const DONE_FETCHING_QUESTIONS = "DONE_FETCHING_QUESTIONS";
export const DONE_FETCHING_USERS = "DONE_FETCHING_USERS";
export const ADD_ANSWER_TO_USER = "ADD_ANSWER_TO_USER";
export const ADD_VOTE = "ADD_VOTE";

export function getUsers(users) {
  return {
    type: GET_USERS,
    users,
    isFetchingUsers: false,
  };
}

export function isFetchingUsers() {
  return {
    type: IS_FECTHING_USERS,
    isFetchingUsers: true,
  };
}

export function doneFetchingUsers() {
  return {
    type: DONE_FETCHING_USERS,
    isFetchingUsers: false,
  };
}

export function addQuestionToUser(question) {
  return {
    type: ADD_QUESTION_TO_USER,
    question,
  };
}

// export function updateQuestionAnswerUser(answer) {
//   return {
//     type: UPDATE_QUESTION_ANSWER_USER,
//     answer,
//   };
// }

export function getQuestions(questions) {
  return {
    type: GET_QUESTIONS,
    questions,
  };
}

export function isFetchingQuestions() {
  return {
    type: IS_FETCHING_QUESTIONS,
    isFetchingQuestions: true,
  };
}

export function doneFetchingQuestions() {
  return {
    type: DONE_FETCHING_QUESTIONS,
    isFetchingQuestions: false,
  };
}

export function createQuestion(question) {
  return {
    type: CREATE_QUESTION,
    question, // it should include {optionone, optiontwo, author keys}
  };
}

export function addQuestion(question) {
  return {
    type: ADD_QUESTION,
    question,
  };
}

export function addVote({ id, answer, authedUser }) {
  return {
    type: ADD_VOTE,
    id,
    answer,
    authedUser,
  };
}

export function addAnswerToUser({ authedUser, id, answer }) {
  // needs the author, answer id and answer properties
  // authedUser, id, answer
  console.log("Answer: ", answer, authedUser, id);
  return {
    type: ADD_ANSWER_TO_USER,
    authedUser,
    id,
    answer,
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
  dispatch(isFetchingUsers());
  return _getUsers()
    .then((users) => dispatch(getUsers(users)))
    .then(() => dispatch(doneFetchingUsers()));
};

export const fetchQuestions = () => (dispatch) => {
  dispatch(isFetchingQuestions());
  return _getQuestions()
    .then((questions) => dispatch(getQuestions(questions)))
    .then(() => dispatch(doneFetchingQuestions()));
};

export const savingQuestion = (question) => (dispatch) => {
  return _saveQuestion(question).then((question) => {
    dispatch(addQuestionToUser(question));
    dispatch(addQuestion(question));
    return question;
  });
};

export const updateAnswer = (answer) => (dispatch) => {
  console.log("Update Answer :", answer);
  // fetching state can be set
  return _saveQuestionAnswer(answer)
    .then((answer) => {
      dispatch(addAnswerToUser(answer));
      dispatch(addVote(answer));
    })
    .then(() => {
      // fetching state can be toggled off
    });
};
