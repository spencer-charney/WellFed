import React from 'react';
import Post from './Post'

class Discover extends React.Component {
    constructor(props){
      super(props);
    }
    render() {
      //const postList = this.props.postList;
      const posts = [];
      const postList = posts.map((post)=> 
        <li key={post.props.id}>
          <Post>{post}</Post>
        </li>     
      );
      return (
        <center>
          <h1>My Feed</h1>
          <div className="scroll">
            <ul>
              {postList}
            </ul>
          </div>
        </center>
      )
    }
  }
  
  export default Discover;