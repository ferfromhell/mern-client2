import { USER_LOGGED, RECENT_ACTIVITY } from './types';


export const userJoined = (data) => ({
	type: USER_LOGGED,
	usersOnline:data
})
export const newActivity = (data) => ({
	type: RECENT_ACTIVITY,
	activities: data
})
export const userJoinedTest = (data) => ({
	type: USER_LOGGED,
	usersOnline:data
})

export const StartJoinApp = (socket,user) => dispatch =>{
  socket.emit('online-users', user);
}
export const testOnline = (socket,user) => dispatch =>{
  socket.emit('testOnline', user);
}