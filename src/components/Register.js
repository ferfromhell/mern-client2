import React, { Component } from 'react';
import { Form, Button, Icon } from 'semantic-ui-react';
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

//ACtions
import { registerUser } from '../actions/authActions';


 class Register extends Component {
  constructor(){
    super();
    this.state={
      name:'',
      lastname:'',
      username:'',
      email:'',
      password:'',
      errors : {}
    }
  }
  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push('/dashboard');
    }
  }
  componentWillReceiveProps = (nextProps) =>{
    if(nextProps.errors){
      this.setState({errors: nextProps.errors});
    }
  }
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  }
  
  onSubmit= async(e) => {
    const args = {
      name: this.state.name,
      lastname: this.state.lastname,
      username: this.state.username,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2
    }
    // console.log(args);
    e.preventDefault();
    
    this.props.registerUser(args, this.props.history);
  }
  
  render() {
    const  styles = {
      box:{
        "width": "450px",margin:"100px auto",
        border:'1px solid #e6',background:'#fff',textAlign:'center',marginBottom:'1em',padding:'1em'
      }
    }
    // const { user } = this.props.auth;

    return (
      <div>
        <div  style={styles.box}>
          <h3>Sign up!</h3>
          
          <Form onSubmit={this.onSubmit}>
              <Form.Field>
                <Form.Input 
                  name="name" 
                  onChange={this.onChange} 
                  error = {this.state.errors.name? true:false}
                  placeholder='First name'/>
              </Form.Field>
              <Form.Field>
                <Form.Input 
                  name="lastname" 
                  onChange={this.onChange} 
                  error = {this.state.errors.lastname? true:false}
                  placeholder='Last name' />
              </Form.Field>
              <Form.Field>
                <Form.Input 
                  name="username" 
                  onChange={this.onChange} 
                  placeholder='Username'
                  error = {this.state.errors.username? true:false} 
                  icon={<Icon name="user" size="small" />} />
              </Form.Field>  
              <Form.Field>
                <Form.Input 
                  name="email" 
                  onChange={this.onChange} 
                  placeholder='email' 
                  error = {this.state.errors.email? true:false}
                  icon={<Icon name="mail" size="small" />} />
              </Form.Field>
              <Form.Field>
                <Form.Input 
                  name="password" 
                  type="password" 
                  error = {this.state.errors.password? true:false}
                  onChange={this.onChange} 
                  placeholder='Password'/>
              </Form.Field>
              <Form.Field>
                <Form.Input 
                  name="password2" 
                  type="password" 
                  error = {this.state.errors.password? true:false}
                  onChange={this.onChange} 
                  placeholder='Confirm password'/>
              </Form.Field>
              <Button type='submit' primary fluid>Sign up</Button>
          </Form>
          </div>
      </div>
    )
  }
}

 Register.propTypes = {
   registerUser: PropTypes.func.isRequired,
   auth: PropTypes.object.isRequired,
   errors: PropTypes.object.isRequired
 }
const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  {
    registerUser
  }
)(withRouter(Register))