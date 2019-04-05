import { USER_LOGGED, ONLINE_TEST, RECENT_ACTIVITY } from '../actions/types';

const initialState = {
  usersOnline: 0,
  usersOnlineTest: '',
  activities: []
}

export default (state = initialState, action) => {
  switch(action.type){
    case USER_LOGGED:
      return {
        ...state,
        usersOnline: action.usersOnline
      };
    case RECENT_ACTIVITY:
      return {
        ...state,
        activities: action.activities
      };
    case ONLINE_TEST:
      return {
        ...state,
        usersOnlineTest: action.usersOnline
      };
    default:
      return state;
  }
}