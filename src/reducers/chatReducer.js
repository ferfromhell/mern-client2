import { ADD_MESSAGE, MESSAGE_RECEIVED, ADD_USER, USER_LIST } from "../actions/types";

const initialState = {
  messages: [],
  message: {},
  users: []
};

export default (state= initialState,action) => {
  switch(action.type){
    case ADD_MESSAGE: 
      return{
        ...state,
        message: action.message,
        author: action.author,
        id: action.id
      }
    case MESSAGE_RECEIVED: 
      return{
        ...state,
        message: action.message,
        author: action.author,
        id: action.id
      }
    case ADD_USER: 
      return{
        ...state,
        name: action.name,
        id: action.id
      }
    case USER_LIST: 
      return{
        ...state,
        users: action.users
      }
    default:
      return state;
  }
}