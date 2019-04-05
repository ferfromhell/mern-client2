import axios from 'axios';
import jwt_decode from 'jwt-decode';
import setAuthToken from '../setAuthToken';
import { GET_ERRORS, SET_CURRENT_USER } from './types';


export const registerUser = (args, history) =>(dispatch) =>{
  axios.post('/api/users/register',args)
    .then(res => {
      history.push('/login');
    })
    .catch(err =>{
      console.log('err register: ',err); 
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    } 
    );
};
export const loginUser = (args) => (dispatch) => {
  axios.post('/api/users/login',args)
    .then(res => {
      const {token} = res.data;
      localStorage.setItem('tokenbbs', token); 
      setAuthToken(token);
      const decoded = jwt_decode(token);
      dispatch(setCurrentUser(decoded));
      
    })
    .catch(err => 
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      }) 
    );
};
export const setCurrentUser = decoded => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded
  };
};

export const logoutUser = () => dispatch => {
  // Remove token from localStorage
  localStorage.removeItem('tokenbbs');
  // Remove auth header for future requests
  setAuthToken(false);
  // Set current user to {} which will set isAuthenticated to false
  dispatch(setCurrentUser({}));
};