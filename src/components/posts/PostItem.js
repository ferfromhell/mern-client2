import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Grid, Card, Button, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import CanvasDraw from 'react-canvas-draw';
import { deletePost, addLike } from '../../actions/postActions';


class PostItem extends Component {
  onDeleteClick(postId){
    // console.log(post);
    this.props.deletePost(postId);

  }
  onLike(postId){
    this.props.addLike(postId);
  }
  findMyLike(likes){
    const { auth } = this.props;
    // console.log(likes);
    if(likes === undefined){
      return 'grey'
    }else{
      if (likes.filter(like => like.user === auth.user.id).length > 0) {
        return 'green';
      } else {
        return 'grey';
      }
    }
  }
  render() {
    const {post, auth} = this.props;
    let likes = post.likes? post.likes.length: 0; 
    return (
      <Card fluid>
        <Card.Content>
          <Image floated='right' size='mini' src={post.avatar} />
          <Card.Header>{post.tittle}</Card.Header>
          <Card.Meta>{post.name}</Card.Meta>
          <Card.Description>
            {post.text}
          </Card.Description>
        </Card.Content>
        {post.draw !== undefined? (
          <CanvasDraw 
          disabled
          hideGrid
          ref={canvasDraw => (this.loadableCanvas = canvasDraw)}
          saveData= {post.draw}/>
        ):null}        
        <Card.Content extra>
          <Grid>
            <Grid.Column floated='left' width={4}>
                  <Button 
                    color = { this.findMyLike(post.likes) }
                    icon = 'thumbs up outline'
                    size='mini' 
                    onClick={ this.onLike.bind(this, post._id)}
                    label={{basic:true,pointing:"left",content:likes, color:this.findMyLike(post.likes)}}
                  />
                      
            </Grid.Column>
            <Grid.Column floated='right' width={4}>
              <Link to={`/post/${post._id}`}>
                Comments
              </Link>
            </Grid.Column>
            <Grid.Column floated='right' width={4}>
            { post.user === auth.user.id? (
              <Button 
                icon='delete' 
                color='red' 
                size="mini" 
                onClick={this.onDeleteClick.bind(this, post._id)} />
            ): null}
            </Grid.Column>
          </Grid>
            
        </Card.Content>
      </Card>
    )
  }
}

PostItem.ropTypes = {
  deletePost: PropTypes.func.isRequired,
  addLike: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  auth: state.auth
})
export default connect(mapStateToProps, { deletePost, addLike })(PostItem);