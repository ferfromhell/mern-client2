import { combineReducers} from 'redux';
import authReducer from './authReducer';
import errorReducer from './errorsReducer';
import profileReducer from './profileReducer';
import postReducer from './postReducer';
import chatReducer from './chatReducer';
import notiReducer from './notiReducer';

export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
  profile: profileReducer,
  post: postReducer,
  chat: chatReducer,
  noti: notiReducer
})