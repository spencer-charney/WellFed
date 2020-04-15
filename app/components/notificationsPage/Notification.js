import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
var moment = require('moment');

class Notification extends React.Component {
   constructor(props) {
      super(props);

   }
   render() {
      let notification;
      let time = moment(this.props.time).format('MM/DD/YYYY, HH:MM A')
      switch (this.props.type) {
         case "newComment":
            notification = <Container fluid className="notification">
               <Row><p className="notification-detail">New Comment from {this.props.username}</p></Row>
               <Row><p className="notification-detail"><i>{time}</i></p></Row>
               <Row><p className="notification-detail">{this.props.message}</p></Row>
            </Container>
            break;
         case "newBookmark":
            notification = <Container fluid className="notification">
               <Row><p className="notification-detail">New Bookmark from {this.props.username}</p></Row>
               <Row><p className="notification-detail"><i>{time}</i></p></Row>
               <Row ><p className="notification-detail">{this.props.message}</p></Row>
            </Container>
            break;
         case "newFollow":
            notification = <Container fluid className="notification">
               <Row><p className="notification-detail">New Follow from {this.props.username}</p></Row>
               <Row><p className="notification-detail"><i>{time}</i></p></Row>
            </Container>
            break;
      }
      return (
         <div>         {notification}
         </div>
      )
   }
}

export default Notification;