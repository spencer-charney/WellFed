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
          <h1>{this.props.restaurant}</h1>
          <h2>Dish: {this.props.dish}</h2>
          <p><i>{this.props.user}</i></p>
          <p>{this.props.rate} of 5 stars</p>
          <p>{this.props.tag}</p>
          <p>{this.props.review}</p>
        </center>
      </div>
    )
  }
}

export default Review;