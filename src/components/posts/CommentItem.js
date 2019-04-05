import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Grid, Segment, Image } from 'semantic-ui-react';

class CommentItem extends Component {
  render() {
    const { comment, postId, auth } = this.props;
    return (
      <Segment>
        <Grid columns={2} divided>
          <Grid.Row stretched>
            <Grid.Column>
              <Image src={comment.avatar} avatar />
              <span>{comment.name}</span>
            </Grid.Column>
            <Grid.Column>
              <p>{comment.text}</p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    )
  }
}

CommentItem.propTypes ={
  comment: PropTypes.object.isRequired,
  postId: PropTypes.string.isRequired,
  auth: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  auth: state.auth
})

export default  connect(mapStateToProps)(CommentItem)