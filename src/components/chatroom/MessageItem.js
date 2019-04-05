import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Card, Image } from 'semantic-ui-react';

class MessageItem extends Component {
  render() {
    const { author, message, auth } = this.props;
    return (
      <Card fluid>
        <Card.Content>
          <Image floated='right' size='mini' src={auth.user.avatar}/>
          <Card.Header>{author}</Card.Header>
          <Card.Meta></Card.Meta>
          <Card.Description>
          <p>{message}</p>
          </Card.Description>
        </Card.Content>
      </Card>
    )
  }
}


MessageItem.propTypes ={
  message: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  auth: PropTypes.object.isRequired
}
const mapStateToProps = state => ({
  auth: state.auth
})

export default connect(mapStateToProps)(MessageItem)