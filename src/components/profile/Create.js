import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Form, Message } from 'semantic-ui-react';
import { withRouter } from 'react-router-dom';
import { createProfile } from '../../actions/profileActions';



class CreateProfile extends Component {
  constructor(props){
    super(props);
    this.state ={
      displaySocialInputs: false,
      handle: "",
      company: '',
      webSite: '',
      location: '',
      status: '',
      skills: '',
      githubusername: '',
      bio: '',
      twitter: '',
      facebook: '',
      linkedin: '',
      youtube: '',
      instagram: '',
      errors: {}
    }
  }
  componentWillReceiveProps(nextProps){
    if(nextProps.errors){
      this.setState({errors: nextProps})
    }
  }
  onSubmit = e =>{
    e.preventDefault();
    const profileData ={
      handle: this.state.handle,
      company: this.state.company,
      website: this.state.website,
      location: this.state.location,
      bio: this.state.bio
    }
    console.log(profileData);
    this.props.createProfile(profileData, this.props.history);
  }
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const  styles = {
      box:{
        "width": "450px",margin:"100px auto",
        border:'1px solid #e6',background:'#fff',textAlign:'center',marginBottom:'1em',padding:'1em'
      }
    }
    const { errors } = this.state
    return (
      <div>
        <div  style={styles.box}>
        {Object.entries(errors).length === 0? null:
          <Message warning>
            <Message.Header>Errors</Message.Header>
            <p>{errors}</p>
        </Message>}
        <Form onSubmit={this.onSubmit}>
          <Form.Group>
                <Form.Input 
                  placeholder="handle"
                  label="Handle"
                  name="handle"
                  value={this.state.handle}
                  onChange={this.onChange}
                />
                <Form.Input 
                  placeholder="company"
                  label="Company"
                  name="company"
                  value={this.state.company}
                  onChange={this.onChange}
                />
          </Form.Group>
          <Form.Group>
              <Form.Input 
                  placeholder="website"
                  label="Website"
                  name="website"
                  value={this.state.website}
                  onChange={this.onChange}
                />
                <Form.Input 
                  placeholder="location"
                  label="Location"
                  name="location"
                  value={this.state.location}
                  onChange={this.onChange}
                />
          </Form.Group>
          {/* <Form.Group>
              <Form.Input 
                  placeholder="website"
                  label="Website"
                  name="website"
                  value={this.state.website}
                  onChange={this.onChange}
                />
                <Form.Input 
                  placeholder="location"
                  label="Location"
                  name="location"
                  value={this.state.location}
                  onChange={this.onChange}
                />
          </Form.Group> */}
          <Form.Group>
            <Form.TextArea 
              name="bio"
              value={this.state.bio}
              onChange={this.onChange}
              label='About' 
              placeholder='Tell us more about you...' />
          </Form.Group>
          <Form.Button inverted color="blue">Submit</Form.Button>
        </Form>
        </div>
      </div>
    )
  }
}

CreateProfile.propTypes={
  profile: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
}

const mapsStateToProps = state => ({
  profile: state.profile,
  errors: state.errors
})
export default connect(mapsStateToProps, {createProfile})(withRouter(CreateProfile))