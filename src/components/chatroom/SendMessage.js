import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Form, Button, Input } from 'semantic-ui-react';

import { addMessage } from '../../actions/chatActions';


class SendMessage extends Component {
  constructor(props){
    super(props);
    this.state ={
      message: '',
      errors: {}
    }
  }
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  }
  onSubmit =(e) =>{
    e.preventDefault()
    const { user } =this.props.auth;
    console.log(this.state, user);

    //push to messages
    const { messages } = this.props.chat;
    // console.log(messages);
    messages.unshift({id:0,message:this.state.message,author: user.name});
    
    this.props.addMessage(this.state.message, user.name);
    this.setState({message: ''});
    
  }
  render() {
    return (
      <Form onSubmit={this.onSubmit}>
      <Form.Group inline>
        <Form.Field width={12}>
          <label>Message</label>
          <Input 
            name='message'
            value={this.state.message}
            placeholder='Type here...'
            onChange={this.onChange}
          />
        </Form.Field>
        <Form.Field width={4}>
          <Button type='submit' primary fluid>Send</Button>
        </Form.Field>
      </Form.Group>
    </Form>
    )
  }
}

SendMessage.propTypes = {
  addMessage: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
}
const mapStateToProps = state => ({
  auth: state.auth,
  chat: state.chat
});
export default connect(mapStateToProps,{ addMessage})(SendMessage)

