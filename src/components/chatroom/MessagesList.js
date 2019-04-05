import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { Card } from 'semantic-ui-react';
import MessageItem from './MessageItem'
import { messageReceived } from '../../actions/chatActions';
import {connect} from 'react-redux';

class MessagesList extends Component {
  render() {
    const { messages } = this.props.chat;
    // console.log(chat);
    return (
      <Card.Group>
        {messages.map((message,index) => <MessageItem key={index} {...message}/>)}
      </Card.Group>
    )
  }
}

MessagesList.propTypes = {
	messages: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.number.isRequired,
			message: PropTypes.string.isRequired,
			author: PropTypes.string.isRequired,
		}).isRequired
	).isRequired
}
const mapStateToProps = state => ({
  chat: state.chat
})

export default  connect(mapStateToProps,{})(MessagesList)