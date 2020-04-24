import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button'
import MyBooks from './MyBooks';
import MyPosts from './MyPosts';
import {followUser, unfollowUser, isAuthenticated} from '../landingPage/Auth'

import '../../css/profile.css'

class OtherProfile extends React.Component {
  constructor(props) {
    super(props);
    let isFollowing = false;
    if (this.props.otherUser.followers) isFollowing = this.props.otherUser.followers.includes(this.props.self._id);
    this.state = {
      clicked:isFollowing
    }
    this.handleFollow = this.handleFollow.bind(this);
  }
  handleFollow() {
    const auth = isAuthenticated();

    if(this.state.clicked){
      unfollowUser(auth.user._id, this.props.otherUser._id, auth.token).then(
        data => {
            if (data.error) {
                console.log(data.error);
            }
            else {
              this.props.clickUser(this.props.username)
              this.setState({clicked:false})
                console.log(data);
            }
        }
    )

    }
    else {
      followUser(auth.user._id, this.props.otherUser._id, auth.token, auth.user.username).then(
        data => {
            if (data.error) {
                console.log(data.error);
            }
            else {
              this.props.clickUser(this.props.username)
              this.setState({clicked:true})
                console.log(data);
            }
        }
    )
    }


  }

  render() {
    let followButton;
    if(this.state.clicked){
      followButton = <Button className="button-clicked" onClick={this.handleFollow}>Following</Button>
    }
    else {
      followButton = <Button className="button-not-clicked" onClick={this.handleFollow}>Follow</Button>
    }
    return (
      <Container fluid className="profile-page">
        <Row><h1 className="details">{this.props.name}</h1></Row>
        <Row><p className="details"><i>{this.props.username}</i></p></Row>
        <Row><Col><p className="details"><i>followers: {this.props.followers} following:{this.props.following}</i></p></Col><Col>{followButton}</Col></Row>
        <Row><h4 className="details">{this.props.restrictions}</h4></Row>

        <Container fluid>
          <Row><h4 className="details">My Posts</h4></Row>
          {
            <MyPosts self={this.props.self} myPosts={this.props.myPosts} />
          }
        </Container>
      </Container>
    )
  }
}

export default OtherProfile;