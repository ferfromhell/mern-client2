import React, { Component } from 'react';
import { Card, Feed } from 'semantic-ui-react';
import { connect } from 'react-redux';
import SocketContext from '../../socketContext';
import  * as actions from '../../actions/notiActions';


class RecentActivity extends Component {
  componentDidMount = () => {
    this.props.socket.on('new-activity',(res) => {
      this.props.onNewActivity(res);
    })
  }


  render() {
    const { activities }= this.props.noti;

    return (
    <Card>
      <Card.Content>
        <Card.Header>Recent Activity</Card.Header>
      </Card.Content>
      <Card.Content>
        <Feed>
          {activities.slice(0, 20).map((activity,index) => 
            <Feed.Event key={index}>
              <Feed.Label image={activity.avatar} />
              <Feed.Content>
              <Feed.Date content={activity.at} />
                <Feed.Summary>
                  {`${activity.user} has ${activity.action}`}
                </Feed.Summary>
              </Feed.Content>
          </Feed.Event>
          )}
        </Feed>
      </Card.Content>
    </Card>
    )
  }
}
const RecentActivityWithSocket = props => (
  <SocketContext.Consumer>
    {socket => <RecentActivity {...props} socket={socket} />}
  </SocketContext.Consumer>
)
const mapStateToProps = state => {
  return {
    noti:state.noti
  }
}
const mapDispatchToProps = dispatch => {
  return {
    onNewActivity: (data) => dispatch(actions.newActivity(data)),
  }
}
export default connect (mapStateToProps,mapDispatchToProps)(RecentActivityWithSocket)