import React from 'react';

class Post extends React.Component {
    constructor(props){
        super(props);
        
    }
    render() {
      return (
         <div>
            <div className="post">{this.props.children}</div>
         </div>   
      )
    }
  }
  
  export default Post;