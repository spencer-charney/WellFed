import React from 'react';
import Notification from './Notification'
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';

import '../../css/notifications.css'

class NotificationsPage extends React.Component {
    constructor(props){
      super(props);
    }
    render() {
      let notificationsArray = [];
      var len = this.props.notifications.length;
      for(var i = 0; i < len; i++){
        notificationsArray.push(
          <Notification key={i} type={this.props.notifications[i].type} username={this.props.notifications[i].username} time={this.props.notifications[i].time} message={this.props.notifications[i].message}/>
        );
      }
      return (
        <Container fluid >
          <Col xs={1}/>
          <Col className="scroll-notification">
          {notificationsArray}
          </Col>
          <Col xs={1}/>
        </Container>
      )
    }
  }
  
  export default NotificationsPage;