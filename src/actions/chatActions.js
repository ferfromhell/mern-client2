import { ADD_MESSAGE, MESSAGE_RECEIVED, ADD_USER, USER_LIST } from './types';


let nextMessageId = 0;
let nextUSerId= 0;


export const addMessage = (message,author) => dispatch => {
  dispatch({
    type: ADD_MESSAGE,
    id: nextMessageId++,
    message,
    author
  }) 
};

export const addUser = (name) => ({
  type: ADD_USER,
  id: nextUSerId,
  name
});
export const messageReceived = (message,author) => dispatch => {
  dispatch({
    type: ADD_MESSAGE,
    id: nextMessageId++,
    message,
    author
  }) 
};

export const populateUserList = (users) => ({
  type: USER_LIST,
  users
})