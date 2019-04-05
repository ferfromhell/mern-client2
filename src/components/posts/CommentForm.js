import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Form, Button,Segment, Header } from 'semantic-ui-react';
import { addComment } from '../../actions/postActions';

class CommentForm extends Component {
  constructor(props){
    super(props);
    this.state ={
      text: '',
      errors: {}
    }
  }
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  }
  onSubmit =(e) =>{
    e.preventDefault()
    console.log(this.state);
    const { user } =this.props.auth;
    const { postId } =this.props;

    const newComment = {
      text: this.state.text,
      name: user.name,
      avatar: user.avatar
    };
    // console.log(this.props);
    this.props.addComment(postId, newComment);
    this.setState({tittle:'',text:''});
  }
  render() {
    return (
      <Segment placeholder compact inverted color='grey'>
        <Header>
          Comment something!
        </Header>
        <Form onSubmit={this.onSubmit}>
                <Form.Field>
                    <Form.TextArea name="text" onChange={this.onChange} type="text" placeholder='Message'/>
                </Form.Field>
                <Button type='submit' primary fluid>Comment</Button>
        </Form>
      </Segment>
    )
  }
}

CommentForm.propTypes ={
  addComment: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  postId: PropTypes.string.isRequired,
  errors: PropTypes.object.isRequired

}

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default  connect(mapStateToProps, { addComment })(CommentForm);