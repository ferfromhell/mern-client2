import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import PostForm from './PostForm';
import Loading from '../Loading';
import PostFeed from './PostFeed';
// import PrintButton from './PrintButton';

// import CanvasDraw from 'react-canvas-draw';

import { getPosts } from '../../actions/postActions';



class Posts extends Component {
  componentDidMount = () => {
    this.props.getPosts();
    // console.log(this.props);
  }
  render() {
    const { posts, loading } = this.props.post;
    let postContent;

    if (posts === null || loading) {
      postContent = <Loading />;
    } else {
      postContent = <PostFeed posts={posts} />;
    }

    return (
      <div style={{height: '100vh', width: '99%', margin: "5px auto"}}>
        {/* <PrintButton id={"postsContent"} label={"Print posts"}/> */}
        <div style={{ }}>
          <PostForm/>
        </div>
        <div id="postsContent">
          {postContent}
        </div>
      </div>
    )
  }
}
Posts.propTypes = {
  getPosts: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  post: state.post
});

export default connect(mapStateToProps, { getPosts })(Posts);