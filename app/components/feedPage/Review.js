import React from 'react';
import '../../css/Post.css'
import { IconContext } from "react-icons";
import { FaComment, FaBook } from 'react-icons/fa';
import { FaBookmark } from 'react-icons/fa';
import { FaTelegramPlane } from 'react-icons/fa';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class Review extends React.Component {
  constructor(props) {
    super(props);
    this.handleClickBookmark = this.handleClickBookmark.bind(this);
    this.handleClickComment = this.handleClickComment.bind(this);
    this.state = {
      bookmarkClicked: false,
      commentClicked: false
    };
  }
  handleClickBookmark() {
    if (this.state.bookmarkClicked) {
      this.setState({ bookmarkClicked: false });
    }
    else {
      this.setState({ bookmarkClicked: true });
    }
  }
  handleClickComment() {
    if (this.state.commentClicked) {
      this.setState({ commentClicked: false });
    }
    else {
      this.setState({ commentClicked: true });
    }
  }
  render() {
    let bookmark;
    if (this.state.bookmarkClicked) {
      bookmark = <IconContext.Provider value={{ color: "green", className: "icons global-class-name", size: '2em' }}>
        <div>
          <FaBookmark />
        </div>
      </IconContext.Provider>
    }
    else {
      bookmark = <IconContext.Provider value={{ color: "gray", className: "icons global-class-name", size: '2em' }}>
        <div>
          <FaBookmark />
        </div>
      </IconContext.Provider>
    }
    let comment;
    if (this.state.commentClicked) {
      comment = <IconContext.Provider value={{ color: "green", className: "icons global-class-name", size: '2em' }}>
        <div>
          <FaComment />
        </div>
      </IconContext.Provider>
    }
    else {
      comment = <IconContext.Provider value={{ color: "gray", className: "icons global-class-name", size: '2em' }}>
        <div>
          <FaComment />
        </div>
      </IconContext.Provider>
    }
    return (
      <div>
        <center>
          <h1>{this.props.restaurant}</h1>
          <h2>Dish: {this.props.dish}</h2>
          <p><i>{this.props.user}</i></p>
          <p>{this.props.rate} of 5 stars</p>
          <p>{this.props.tags}</p>
          <p>{this.props.review}</p>
        </center>
        <Container>
          <Row className="userActionRow">
            <Col></Col>
            <Col xs={1} onClick={this.handleClickBookmark}>
              {bookmark}
            </Col>
            <Col xs={1} onClick={this.handleClickComment}>
              {comment}
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default Review;