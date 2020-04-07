import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import '../css/navigation.css'

class Navigation extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      page:"feed"
    }
    this.onClickProfile = this.onClickProfile.bind(this);
    this.onClickNotification = this.onClickNotification.bind(this);
    this.onClickFeed = this.onClickFeed.bind(this);

  }
  onClickProfile(){
    this.props.onComponentChange('profile');
  }
  onClickNotification(){
    this.props.onComponentChange('notifications');

  }
  onClickFeed(){
    this.props.onComponentChange('feed');

  }
   
  render() {
    return (
      <Container fluid>
        <Row className="navbar-row">
          <Col xs={1}>Well Fed</Col>
          <Col xs={1} onClick={this.onClickProfile} className="navbar-col">My Profile</Col>
          <Col xs={1} onClick={this.onClickNotification} className="navbar-col">Notifications</Col>
          <Col xs={1} onClick={this.onClickFeed} className="navbar-col">Feed</Col>
        </Row>
      </Container>
    )
  }
}

export default Navigation;