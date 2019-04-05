import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Form, Button,Segment, Header } from 'semantic-ui-react';
import { addPost } from '../../actions/postActions';
import CanvasDraw from 'react-canvas-draw';


class PostForm extends Component {
  constructor(props){
    super(props);
    this.state ={
      text: '',
      tittle: '',
      errors: {}
    }
  }
  componentWillReceiveProps(newProps){
    console.log(newProps);
  }
  onSubmit =(e) =>{
    e.preventDefault()
    let draw= this.saveableCanvas.getSaveData();
    console.log('draw: ', draw)
    const { user } =this.props.auth;
    const newPost = {
      tittle: this.state.tittle,
      text: this.state.text,
      name: user.name,
      avatar: user.avatar,
      draw: draw
    };
    // console.log(this.state);
    // console.log(this.props);
    this.props.addPost(newPost);
    this.setState({tittle:'',text:''});
    this.saveableCanvas.clear();
  }
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
    // console.log(this.state);
  }
  render() {
    const br=1;
    const lr=1;
    return (
      <Segment style={{width: '100%'}}>
        <Header>
          Post something!
        </Header>
        <Form onSubmit={this.onSubmit} style={{width: '100%'}}>
          <Form.Group widths='equal'>
              {/* <DrawArea/> */}
              {/* <DropImage/> */}
              <Form.Field>
                <label>Tittle</label>
                <Form.Input type="text" name="tittle" onChange={this.onChange} placeholder='Tittle'/>
                <label>Text</label>
                <Form.TextArea name="text" onChange={this.onChange} type="text" placeholder='Message'/>
              </Form.Field>
              <Form.Field>
                <CanvasDraw 
                  ref={canvasDraw => (this.saveableCanvas = canvasDraw)}
                  brushRadius={br}
                  lazyRadius={lr}
                  canvasWidth={300}
                  canvasHeight={150}
                />
              </Form.Field>
          </Form.Group>
          <Button type='submit' primary fluid>Post</Button>
        </Form>
      </Segment>
    )
  }
}

PostForm.propTypes ={
  addPost: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired

}

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default  connect(mapStateToProps, { addPost })(PostForm);