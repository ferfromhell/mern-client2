import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Card } from 'semantic-ui-react';

class ProfileItem extends Component {
  render() {
    const { profile } = this.props;
    const extra = (<Link to={`/profile/${profile.handle}`} className="btn btn-info">
                      View Profile
                    </Link>)
    return (
      <Card
        image={profile.user.avatar}
        header={profile.user.name}
        meta={profile.location}
        description={profile.user.bio}
        extra={extra}
      />
    )
  }
}

ProfileItem.propTypes = {
  profile: PropTypes.object.isRequired
};

export default ProfileItem