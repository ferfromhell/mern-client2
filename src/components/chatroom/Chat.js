import React, { Component } from 'react';
import { Grid, Message } from 'semantic-ui-react';
import SendMessage from './SendMessage';
import MessagesList from './MessagesList';
import UserList from './UserList';


export default class Chat extends Component {
  render() {
    const messages = [{
      id:0,
      message:[],
      author:'',
    }];
    const users = []
    
    return (
      <Grid celled>
        <Grid.Row >
          <Grid.Column width={4}>
            <UserList users={users}/>
          </Grid.Column>
          <Grid.Column width={12}>
            <Grid.Row>
              <Grid.Column>
                <SendMessage/>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column>
                <MessagesList messages={messages}/>
              </Grid.Column>
            </Grid.Row>
          </Grid.Column>
        </Grid.Row>
    </Grid>
    )
  }
}
