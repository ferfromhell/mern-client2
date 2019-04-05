import React, { Component } from 'react';
import { Menu, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from '../actions/authActions';
import { clearCurrentProfile } from '../actions/profileActions';


class Navbar extends Component {
   state ={activeItem: 'home'}; 
   
   componentWillReceiveProps = nextProps => {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push('/dashboard');
    }

    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

   handleItemClick = (e, { name }) => this.setState({ activeItem: name });
   handleLogout = (e) => {
     e.preventDefault();
     this.props.clearCurrentProfile();
     this.props.logoutUser();
   }
  render() {
    const { activeItem } = this.state;
    const { isAuthenticated, user } = this.props.auth;
    const authLinks = (
      <Menu.Menu position='right'>
        <Menu.Item>
            <Link to="/">
              <Button inverted color='red' onClick={this.handleLogout}>Logout</Button>
            </Link>
          </Menu.Item>
        <Menu.Item>
          <img src={user.avatar} alt={user.name} tittle={user.name}/>
        </Menu.Item>
      </Menu.Menu>);
    const guestLinks = (
      <Menu.Menu position='right'>
        <Menu.Item>
          <Link to="/register">
            <Button inverted color='green'>Sign Up</Button>
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link to="/login">
            <Button inverted color='green'>Sign in</Button>
          </Link>
        </Menu.Item>
      </Menu.Menu>);
    return (
      <div>
        <Menu inverted>
        <Link to="/">
          <Menu.Item header>MERN APP </Menu.Item>
        </Link>
          <Menu.Item
            name='home'
            as={ Link }
            to='/dashboard'
            active={activeItem === 'home'}
            content='Home'
            onClick={this.handleItemClick}
          />
          <Menu.Item
            as={ Link }
            to='/profiles'
            name='profile'
            active={activeItem === 'profile'}
            text='Profiles'
            onClick={this.handleItemClick}
          />
          <Menu.Item
            as={ Link }
            to='/posts'
            name='posts'
            active={activeItem === 'posts'}
            content='Posts'
            onClick={this.handleItemClick}
          />
          {/* <Menu.Item
            as={ Link }
            to='/chat'
            name='chat'
            active={activeItem === 'chat'}
            content='ChatRoom'
            onClick={this.handleItemClick}
          /> */}
          {isAuthenticated ? authLinks:guestLinks}
        </Menu>
      </div>
    )
  }
}

Navbar.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { logoutUser,clearCurrentProfile })(
  Navbar
);