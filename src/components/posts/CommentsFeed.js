import React, { Component } from 'react'
import PropTypes from 'prop-types';
import CommentItem from './CommentItem';
import { Card } from 'semantic-ui-react';

class CommentsFeed extends Component {
  
  render() {
    const { comments, postId} = this.props
    return (
      <Card.Group>
        {comments.map(comment => <CommentItem key={comment._id} comment={comment} postId={postId}/>)}
      </Card.Group>
    )
  }
}
CommentsFeed.propTypes={
  comments: PropTypes.array.isRequired,
  postId: PropTypes.string.isRequired
}

export default  CommentsFeed