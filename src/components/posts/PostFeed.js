import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PostItem from './PostItem';
import { Card } from 'semantic-ui-react';


// const cardItem = (post,i) => {
//   return (<Card key={i}>
//       <Card.Content>
//         <Image floated='right' size='mini' src={post.avatar} />
//         <Card.Header>{post.tittle}</Card.Header>
//         <Card.Meta>{post.name}</Card.Meta>
//         <Card.Description>
//           {post.text}
//         </Card.Description>
//       </Card.Content>
//       <Card.Content extra>
//           <Button as='div' labelPosition='right'>
//               <Button icon size='mini'>
//                   <Icon name='thumbs up outline' />

//               </Button>
//               {/* <Label as='a' basic pointing='left'>
//                   {post.vote}
//               </Label> */}
//           </Button>
//       </Card.Content>
//     </Card>)
// }

class PostFeed extends Component {
  render() {
    const { posts } = this.props;

    return (
      // posts.map(post => <PostItem key={post._id} post={post} />);
      <Card.Group>
        {posts.map(post => <PostItem key={post._id} post={post} />)}
        {/* {posts.map(cardItem)} */}
      </Card.Group>
    )
  }
}

PostFeed.propTypes = {
  posts: PropTypes.array.isRequired
};

export default PostFeed;