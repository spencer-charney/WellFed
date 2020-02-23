import React from 'react';
import '../css/Notification.css'

class Notification extends React.Component {
    constructor(props){
        super(props);
        
    }
    render() {
      return (
         <div>
            <hr />
            <div className="notification">{this.props.children}</div>
         </div>   
      )
    }
  }
  
  export default Notification;