import React from 'react';
import { IconContext } from "react-icons";
import { FaComment, FaBook } from 'react-icons/fa';
import { FaBookmark } from 'react-icons/fa';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Comments from './Comments'
import CommentForm from './CommentForm';
import Bookselector from './Bookselector'

import '../../css/feed.css'


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
    let selector;
    if (this.state.bookmarkClicked) {
      bookmark = <IconContext.Provider value={{ color: "green", className: "icons global-class-name", size: '2em' }}>
        <div>
          <FaBookmark />
        </div>
      </IconContext.Provider>;
      selector = <Bookselector myBooks={["book1", "book2", "book3"]}/>;
    }
    else {
      bookmark = <IconContext.Provider value={{ color: "gray", className: "icons global-class-name", size: '2em' }}>
        <div>
          <FaBookmark />
        </div>
      </IconContext.Provider>
      selector = <div></div>;
    }
    let comment;
    var comments;
    if (this.state.commentClicked) {
      comment = <IconContext.Provider value={{ color: "green", className: "icons global-class-name", size: '2em' }}>
        <div>
          <FaComment />
        </div>
      </IconContext.Provider>
      comments = <div>
        <Comments commenting={true} comments={this.props.comments}/>
        <CommentForm />
        </div>
    }
    else {
      comment = <IconContext.Provider value={{ color: "gray", className: "icons global-class-name", size: '2em' }}>
        <div>
          <FaComment />
        </div>
      </IconContext.Provider>
      comments = <Comments commenting={false} comments={this.props.comments}/>

    }
    return (
      <Container fluid className="post-container">
        <Row><h1 className="details">{this.props.restaurant}</h1></Row>
        <Row><h2 className="details">Dish: {this.props.dish}</h2></Row>
        <Row><p className="details"><i>{this.props.user}</i></p></Row>
        <Row><p className="details">{this.props.rate} of 5 stars</p></Row>
        <Row><p className="details">{this.props.tags}</p></Row>
        <Row><p className="details">{this.props.review}</p></Row>
        <Container fluid>
          {comments}
          <Row className="user-action-row">
            <Col />
            <Col xs={2}>
              {selector}
            </Col>
            <Col xs={1} onClick={this.handleClickBookmark}>
              {bookmark}
            </Col>
            <Col xs={1} onClick={this.handleClickComment}>
              {comment}
            </Col>
          </Row>
        </Container>
      </Container>
    )
  }
}

export default Review;