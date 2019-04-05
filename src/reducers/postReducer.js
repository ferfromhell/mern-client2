import { ADD_POST,ADD_DRAW, GET_POSTS, POST_LOADING , GET_POST, DELETE_POST } from "../actions/types";

const initialState = {
  posts: [],
  post: {},
  loading: false,
  lines: {}
}

export default function(state = initialState, action){
  switch(action.type){
    case POST_LOADING: 
      return {
        ...state,
        loading: true
      }
    case GET_POSTS:
      return {
        ...state,
        posts: action.payload,
        loading: false
      };
    case GET_POST:
      // console.log(action.payload);
      return {
        ...state,
        post: action.payload,
        loading: false
      };
    case ADD_POST: 
      return {
        ...state,
        posts: [action.payload,...state.posts]
    }
    case ADD_DRAW: 
      return {
        ...state,
        lines: action.payload
      }
    case DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter(post => post._id !== action.payload)
      };
    default:
      return state;
  }
}