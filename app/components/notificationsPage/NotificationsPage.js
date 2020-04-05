import React from 'react';
import '../../css/Notification.css'
import Notification from './Notification'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

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
        <Container fluid>
          {notificationsArray}
        </Container>
      )
    }
  }
  
  export default NotificationsPage;