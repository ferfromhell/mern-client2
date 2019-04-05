import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Form, Button, Message } from 'semantic-ui-react';
import { withRouter, Link } from 'react-router-dom';
import { createProfile,getCurrentProfile } from '../../actions/profileActions';
import isEmpty from '../../is-empty';



class ManageProfile extends Component {
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
  componentDidMount(){
    this.props.getCurrentProfile();
  }
  componentWillReceiveProps(nextProps){
    if(nextProps.errors){
      this.setState({errors: nextProps})
    };
    if(nextProps.profile.profile){
      const profile = nextProps.profile.profile;

      profile.company = !isEmpty(profile.company)? profile.company:"";
      profile.website = !isEmpty(profile.website)? profile.website:"";
      profile.location = !isEmpty(profile.location)? profile.location:"";
      profile.about = !isEmpty(profile.about)? profile.about:"";

      this.setState({
        handle: profile.handle,
        company: profile.company,
        website: profile.website,
        location: profile.location,
        bio: profile.bio
      })
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
        <Link to="/dashboard">
            <Button inverted color='blue'>Back</Button>
        </Link>
        {Object.entries(errors).length === 0? null:
          <Message warning>
            <Message.Header>Errors</Message.Header>
            {/* <p>{errors}</p> */}
        </Message>}
        <h1>Manage your profile</h1>
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
          <Form.Group>
            <Form.TextArea 
              width={14}
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

ManageProfile.propTypes={
  createProfile: PropTypes.func.isRequired,
  getCurrentProfile: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
}

const mapsStateToProps = state => ({
  profile: state.profile,
  errors: state.errors
})
export default connect(mapsStateToProps, {createProfile, getCurrentProfile})(withRouter(ManageProfile))