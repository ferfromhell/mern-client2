import React, { Component } from 'react';
import SocketContext from '../../socketContext';
import { connect } from 'react-redux';
import  * as actions from '../../actions/notiActions';


class OnlineUser extends Component {
  componentDidMount = () => {
    const { auth } = this.props;
    // const nUsers = this.props.noti.usersOnline;
    // this.props.onStartJoinApp(this.props.socket);
    this.props.onStartJoinApp(this.props.socket, auth);
    this.props.socket.on('online-users',(res) => {
      this.props.onUserJoined(res);
    })
    // console.log(usersOnline);
    // this.props.socket.on('online-users', (num) => {
    //   console.log(num,'num');
    //   usersOnline=num
    // })  
  }
  render(){
    return (
      <div>
        Online user: {this.props.noti.usersOnline}
      </div>
    )
  }
}

const OnlineUserWithSocket = props => (
  <SocketContext.Consumer>
    {socket => <OnlineUser {...props} socket={socket} />}
  </SocketContext.Consumer>
)
const mapStateToProps = state => {
  return {
    auth: state.auth,
    noti: state.noti
  }
};
const mapDispatchToProps = dispatch => {
  return {
    onStartJoinApp: (socket,user) => dispatch(actions.StartJoinApp(socket,user)),
    onOnlineTest: (socket, user) => dispatch(actions.testOnline(socket, user)),
    onUserJoined: (data) => dispatch(actions.userJoined(data)),
  }

}


export default connect(mapStateToProps,mapDispatchToProps)(OnlineUserWithSocket)