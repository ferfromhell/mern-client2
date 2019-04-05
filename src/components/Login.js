import React, { Component } from 'react';
import { Form, Button, Icon } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { loginUser } from '../actions/authActions';

class Login extends Component {
  constructor(){
    super();
    this.state={
      email:'',
      password:'',
      errors: {}
    }
  }
  componentDidMount = () =>{
    if(this.props.auth.isAuthenticated){
      this.props.history.push('/dashboard')
    }
  }
  componentWillReceiveProps = (nextProps) => {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push('/dashboard');
    }

    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
    // console.log(this.state);
  }
  
  onSubmit= (e) => {
    e.preventDefault();
    const args = {
      email: this.state.email,
      password: this.state.password,
    }
    console.log(args);
    this.props.loginUser(args);
    
  }
  render() {
    // const {user} = this.props.auth;
    // const {errors} = this.state.errors;
    const  styles = {
      box:{
        "width": "450px",margin:"100px auto",
        border:'1px solid #e6',background:'#fff',textAlign:'center',marginBottom:'1em',padding:'1em'
      }
    }
    return (
      <div>
        <div  style={styles.box}>
            <h3>Sign in </h3>
            {/* <Form onSubmit={(ev)=>handleSubmit(ev, args)}> */}
            <Form onSubmit={this.onSubmit}>
                <Form.Field>
                    <Form.Input 
                      type="email" 
                      name="email" 
                      onChange={this.onChange} 
                      placeholder='Email' 
                      error = {this.state.errors.email? true:false}
                      icon={<Icon name="mail" size="large" />} />
                </Form.Field>
                <Form.Field>
                    <Form.Input 
                      name="password" 
                      onChange={this.onChange} 
                      type="password" 
                      placeholder='Password' 
                      error = {this.state.errors.name? true:false}
                      icon={<Icon name="remove circle" size="large" />} />
                </Form.Field>
                <Button type='submit' primary fluid>Sign in</Button>
            </Form>
        </div>
      </div>
    )
  }
}

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(mapStateToProps, { loginUser })(Login);