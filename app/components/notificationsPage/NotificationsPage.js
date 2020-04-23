import React from 'react';
import Notification from './Notification'
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


import '../../css/notifications.css'

class NotificationsPage extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    let notificationsArray = [];
    var len = this.props.notifications.length;
    for (var i = 0; i < len; i++) {
      notificationsArray.push(
        <Notification key={i} type={this.props.notifications[i].type} username={this.props.notifications[i].username} time={this.props.notifications[i].time} message={this.props.notifications[i].message} />
      );
    }
    if (len == 0) {
      notificationsArray = <Container fluid>
        <Row>
          <Col />
          <Col className="no-content">
            <p className="no-content-text">You have no notifications yet!</p>
          </Col>
          <Col />
        </Row>
      </Container>
    }
    return (
      <Container fluid className="notification-page">
        <Col xs={1} />
        <Col className="scroll-notification">
          {notificationsArray}
        </Col>
        <Col xs={1} />
      </Container>
    )
  }
}

export default NotificationsPage;