import React from 'react';
import Post from './Post'
import Recipe from './Recipe'
import Review from './Review'
import '../../css/Post.css'


class Discover extends React.Component {
    constructor(props){
      super(props);
    }
    render() {
      //const postList = this.props.postList;
      const posts = [<Recipe />,<Review />,<Recipe />];
      const postList = posts.map((post)=> 
        <li key={post.props.id}>
          <Post>{post}</Post>
        </li>     
      );
      return (
        <div>
          <center>
            <h1>Discover</h1>
          </center>
          <div>
            <ul>
              {postList}
            </ul>
          </div>
        </div>

      )
    }
  }
  
  export default Discover;