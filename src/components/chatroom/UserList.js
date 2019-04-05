import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Card } from 'semantic-ui-react';

class UserList extends Component {
  render() {
    const { users } = this.props
    return (
      <Card.Group>
        {users.map(user => 
              <Card 
                key={user.id} 
                fluid 
                color='red' 
                header='user.name' 
              />
            )}
      </Card.Group>
      
    )
  }
}
UserList.propTypes ={
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired
    }).isRequired
  ).isRequired
}

export default UserList