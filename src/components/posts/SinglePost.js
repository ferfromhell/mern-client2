import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Container, Segment, Grid, Image, Header, Button } from 'semantic-ui-react';
import { getPost } from '../../actions/postActions';
import Loading from '../Loading';
import CommentForm from "./CommentForm";
import CommentFeed from './CommentsFeed';


const CardItem = (data) => {
    // console.log(postP);
    const { post } = data
    return (
      <Segment>
        <Grid>
          <Grid.Column width={4}>
            <Image src={post.avatar} />
            <span>{post.name}</span>
          </Grid.Column>
          <Grid.Column width={9}>
            <Container>
              <Header>{post.tittle}</Header>
              <p>{post.text}</p>
            </Container>
          </Grid.Column>
          <Grid.Column width={3}>
            
          </Grid.Column>
        </Grid>
      </Segment>
    )
  }
  
class SinglePost extends Component {
  componentDidMount(){
    console.log(this.props.match.params.id);
    let id= this.props.match.params.id;
    this.props.getPost(id);
  }
  
  render() {
    const  styles = {
      box:{
        "width": "90%",margin:"20px auto",
        border:'1px solid #e6',background:'#fff',textAlign:'center',marginBottom:'1em',padding:'1em'
      }
    }
    const { post } = this.props.post;
    let postContent;

    if(post === null || Object.keys(post).length === 0){
      postContent = <Loading/>
    }else{
      // console.log(post.post)
      postContent = 
        <Container>
        <CardItem post={post} style={{margin: "10px auto"}}/>
        <CommentForm postId={post._id}/>
        <CommentFeed postId={post._id} comments={post.comments}/>
      </Container>
    }
    return (
      <div style={styles.box}>
        <Link to="/posts">
          <Button icon='arrow left' style={{float:"left"}}/>
        </Link>
        {postContent}
      </div>
    )
  }
}

SinglePost.propTypes = {
  getPost: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  post: state.post
});
export default connect(mapStateToProps, { getPost })(SinglePost);