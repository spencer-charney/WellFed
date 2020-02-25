import React from 'react';
import '../../css/Notification.css'
import NewFollowerNotification from './NewFollowerNotification';
import Notification from './Notification'
import NewLikeNotification from './NewLikeNotification';

class NotificationsPage extends React.Component {
    constructor(props){
      super(props);
    }
    render() {
      //const notificationsList = this.props.notificationsList;
      const notifications = [<NewFollowerNotification otherUser="Brian Greeley" time="12:00" id='1'/>,
      <NewFollowerNotification otherUser="Emily Schneider" time="12:01" id='2'/>,
      <NewFollowerNotification otherUser="Mardi Schneider" time="12:02" id='3'/>,
      <NewLikeNotification otherUser="Emily Schneider" post="post1" time="12:03" id='4' />,
      <NewLikeNotification otherUser="Mardi Schneider" post="post1" time="12:03" id='5' />,
      <NewLikeNotification otherUser="Jen Schneider" post="post1" time="12:03" id='6' />,
      <NewLikeNotification otherUser="Will Schneider" post="post1" time="12:03" id='7' />,
      <NewLikeNotification otherUser="Julia Schneider" post="post1" time="12:03" id='8' />];
      const notificationsList = notifications.map((newNotification)=> 
        <li key={newNotification.props.id}>
          <Notification>{newNotification}</Notification>
        </li>     
      );
      return (
        <center>
          <h1>Notifications</h1>
          <div className="scroll">
            <ul>
              {notificationsList}
            </ul>
          </div>
        </center>
      )
    }
  }
  
  export default NotificationsPage;