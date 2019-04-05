import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Button, Segment, Grid } from 'semantic-ui-react';
import Loading from '../Loading';
// import profileReducer from '../../reducers/profileReducer';
import { getProfileByHandle } from '../../actions/profileActions';



class Profile extends Component {
  componentDidMount(){
    if(this.props.match.params.handle){
      this.props.getProfileByHandle(this.props.match.params.handle);
    }
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.profile.profile === null && this.props.profile.loading) {
      this.props.history.push('/not-found');
    }
  }
  render() {
    const  styles = {
      box:{
        "width": "450px",margin:"20px auto",
        border:'1px solid #e6',background:'#fff',textAlign:'center',marginBottom:'1em',padding:'1em'
      }
    }
    const { profile } =this.props.profile;
    let profileContent;
    if(profile === null){
     profileContent = <Loading />   
    }else{
      profileContent = (<div>
        <Link to="/profiles">
            <Button inverted color='blue'>Back</Button>
        </Link>
        <Segment.Group piled>
          <Segment color="blue" inverted>
            <img src={profile.user.avatar}
            alt= "User avatar"/>
          </Segment>
          <Segment>
            <h2>{`${profile.user.name}'s Bio`}</h2>
          </Segment>
          <Segment>
            <Grid columns={2} divided>
              <Grid.Row>
                <Grid.Column>
                  Username:
                </Grid.Column>
                <Grid.Column>
                  {profile.handle}
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column>
                  Company:
                </Grid.Column>
                <Grid.Column>
                {profile.company}
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column>
                  website:
                </Grid.Column>
                <Grid.Column>
                  {profile.website}
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column>
                  Location:
                </Grid.Column>
                <Grid.Column>
                  {profile.location}
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column>
                  Joined:
                </Grid.Column>
                <Grid.Column>
                  {profile.date}
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Segment>
        </Segment.Group>
      </div>)
    }
    return (
      
      <div  style={styles.box}>
        {profileContent}
      </div>
    )
  }
}

Profile.propTypes ={
  getProfileByHandle: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired
}
const mapStateToProps = state =>({
  profile: state.profile
})
export default connect(mapStateToProps, { getProfileByHandle })(Profile);