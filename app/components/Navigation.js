import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { FaRegBell } from 'react-icons/fa';
import { FiHome } from 'react-icons/fi';
import { AiOutlineBook } from 'react-icons/ai';
import { IconContext } from "react-icons";
import { signout } from "./landingPage/Auth";

import '../css/navigation.css'

class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: "feed"
    }
    this.onClickProfile = this.onClickProfile.bind(this);
    this.onClickNotification = this.onClickNotification.bind(this);
    this.onClickFeed = this.onClickFeed.bind(this);
    this.onClickSignOut = this.onClickSignOut.bind(this);

  }
  onClickProfile() {
    this.props.onComponentChange('profile');
  }
  onClickNotification() {
    this.props.onComponentChange('notifications');

  }
  onClickFeed() {
    this.props.onComponentChange('feed');

  }
  onClickSignOut(){
    signout().then(
      window.location.reload(false)
    );
  }

  render() {
    return (
      <Container fluid>
        <Row className="navbar-row" >
          <Col xs={1} onClick={this.onClickProfile} className="navbar-col">
            <IconContext.Provider value={{ size: '2em' }}>
              <div>
                <FiHome />
              </div>
            </IconContext.Provider>
          </Col>
          <Col xs={1} onClick={this.onClickNotification} className="navbar-col">
            <IconContext.Provider value={{ size: '2em' }}>
              <div>
                <FaRegBell />
              </div>
            </IconContext.Provider>
          </Col>
          <Col xs={1} onClick={this.onClickFeed} className="navbar-col">
            <IconContext.Provider value={{ size: '2em' }}>
              <div>
                <AiOutlineBook />
              </div>
            </IconContext.Provider>
          </Col>
          <Col/>
          <Col xs={1}><p onClick={this.onClickSignOut} className="navbar-sign-out">Sign Out</p></Col>
        </Row>
      </Container>
    )
  }
}

export default Navigation;