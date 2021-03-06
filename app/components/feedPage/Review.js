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
import {populateBook} from '../NewPost/ApiPost'
import '../../css/feed.css'


class Review extends React.Component {
  constructor(props) {
    super(props);
    this.handleClickBookmark = this.handleClickBookmark.bind(this);
    this.handleClickComment = this.handleClickComment.bind(this);
    this.updateComments = this.updateComments.bind(this);
    this.clickUser = this.clickUser.bind(this);
    this.state = {
      bookmarkClicked: false,
      commentClicked: false,
      comments: this.props.comments
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

  updateComments(comments) {
    this.setState({ comments });
  };

  addToBook(userId, bookId, token, postId, postTitle) {
    populateBook(userId, bookId, token, postId, postTitle).then(
      data => {
        if (data.error) {
          console.log(data.error);
        }
      }
    )
  }
  clickUser(){
    this.props.clickUser(this.props.username)
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
      selector = <Bookselector postTitle={this.props.dish} postId={this.props.postId} myBooks={this.props.self.myBooks} addToBook={this.addToBook}/>;
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
        <Comments commenting={true} comments={this.state.comments}/>
        <CommentForm self={this.props.self} postId={this.props.postId} updateComments={this.updateComments}/>
        </div>
    }
    else {
      comment = <IconContext.Provider value={{ color: "gray", className: "icons global-class-name", size: '2em' }}>
        <div>
          <FaComment />
        </div>
      </IconContext.Provider>
      comments = <Comments commenting={false} comments={this.state.comments}/>

    }
    return (
      <Container fluid className="post-container">
        <Row><h1 className="details">{this.props.restaurant}</h1></Row>
        <Row><h2 className="details">Dish: {this.props.dish}</h2></Row>
        <Row><i className="details" ><p className="details-user" onClick={this.clickUser}>{this.props.username}</p></i></Row>
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