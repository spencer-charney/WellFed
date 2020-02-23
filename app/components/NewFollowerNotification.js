import React from 'react';
import '../css/Notification.css'

class NewFollowerNotification extends React.Component {
    constructor(props){
        super(props);
        this.handleViewed = this.handleViewed.bind(this);
        this.state = {isViewed: false}
    }
    handleViewed(){
        this.setState({isViewed: true});
    }
    render() {
        const otherUser = this.props.otherUser;
        const time = this.props.time;
      return (
        <div>
            <p className="message">{otherUser} has followed you</p>
            <p className="time">{time}</p>
        </div>
      )
    }
  }
  
  export default NewFollowerNotification;