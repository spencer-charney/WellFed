import React from 'react';
import '../../css/Notification.css'

class NewCommentNotification extends React.Component {
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
        const comment = this.props.comment;
        const post = this.props.post;
        const time = this.props.time;
      return (
        <div>
            <p className="message">{otherUser} commented {comment} on your post</p>
            <p className="post">{post}</p>
            <p className="time">{time}</p>
        </div>
      )
    }
  }
  
  export default NewCommentNotification;