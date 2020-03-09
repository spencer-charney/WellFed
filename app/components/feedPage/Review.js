import React from 'react';
import '../../css/Post.css'
class Review extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <center>
          <h1>Restaurant</h1>
          <h2>Dish</h2>
          <h3><i>User</i></h3>
          <p> of 5 stars</p>
          <p>tags</p>
          <p>review...</p>
        </center>
      </div>
    )
  }
}

export default Review;