import React from 'react';
import '../../css/Notification.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

class Notification extends React.Component {
   constructor(props) {
      super(props);

   }
   render() {
      let notification;
      switch (this.props.type) {
         case "newComment":
            notification = <Container fluid>
               <Row>New Comment from {this.props.username}</Row>
               <Row><i>{this.props.time}</i></Row>
               <Row>{this.props.message}</Row>
            </Container>
            break;
         case "newBookmark":
            notification = <Container fluid>
               <Row>New Bookmark from {this.props.username}</Row>
               <Row><i>{this.props.time}</i></Row>
               <Row>{this.props.message}</Row>
            </Container>
            break;
         case "newFollow":
            notification = <Container fluid>
               <Row>New Follow from {this.props.username}</Row>
               <Row><i>{this.props.time}</i></Row>
            </Container>
            break;
      }
      return (
         <Row>{notification}</Row>
      )
   }
}

export default Notification;