import React from 'react';
import { IconContext } from "react-icons";
import { FaComment, FaBookmark, FaChevronUp, FaChevronDown } from 'react-icons/fa';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Comments from './Comments'
import CommentForm from './CommentForm';
import Bookselector from './Bookselector';
import {populateBook} from '../NewPost/ApiPost'
import '../../css/feed.css'

class Recipe extends React.Component {
  constructor(props) {
    super(props);
    this.handleClickIngredients = this.handleClickIngredients.bind(this);
    this.handleClickDirections = this.handleClickDirections.bind(this);
    this.handleClickBookmark = this.handleClickBookmark.bind(this);
    this.handleClickComment = this.handleClickComment.bind(this);
    this.updateComments = this.updateComments.bind(this);
    this.clickUser = this.clickUser.bind(this);
    this.state = {
      ingredientsClicked: false,
      directionsClicked: false,
      bookmarkClicked: false,
      commentClicked: false,
      comments: this.props.comments
    };
  }
  handleClickIngredients() {
    if (this.state.ingredientsClicked) {
      this.setState({ ingredientsClicked: false });
    }
    else {
      this.setState({ ingredientsClicked: true });
    }
  }
  handleClickDirections() {
    if (this.state.directionsClicked) {
      this.setState({ directionsClicked: false });
    }
    else {
      this.setState({ directionsClicked: true });
    }
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

  updateComments(comments){
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
    let ingList = this.props.ingredients.replace(/<br>/g, '\n');
    let ingredients;
    if (this.state.ingredientsClicked) {
      ingredients = <Row className="dropdownList">{ingList}</Row>
      toggleI = <FaChevronUp />
    }
    else {
      ingredients = <div></div>
      toggleI = <FaChevronDown />
    }

    let dirList = this.props.directions.replace(/<br>/g, '\n');
    let directions;
    if (this.state.directionsClicked) {
      directions = <Row className="dropdownList">{dirList}</Row>
      toggleD = <FaChevronUp />
    }
    else {
      directions = <div></div>
      toggleD = <FaChevronDown />
    }
    let bookmark;
    let selector;
    if (this.state.bookmarkClicked) {
      bookmark = <IconContext.Provider value={{ color: "green", className: "icons global-class-name", size: '2em' }}>
        <div>
          <FaBookmark />
        </div>
      </IconContext.Provider>
      selector = <Bookselector postTitle={this.props.title} postId={this.props.postId} myBooks={this.props.self.myBooks} addToBook={this.addToBook}/>
    }
    else {
      bookmark = <IconContext.Provider value={{ color: "gray", className: "icons global-class-name", size: '2em' }}>
        <div>
          <FaBookmark />
        </div>
      </IconContext.Provider>
      selector = <div></div>
    }
    let comment;
    let comments;
    let toggleI;
    let toggleD;
    
    if (this.state.commentClicked) {
      comment = <IconContext.Provider value={{ color: "green", className: "icons global-class-name", size: '2em' }}>
        <div>
          <FaComment />
        </div>
      </IconContext.Provider>;
      comments = <div>
        <Comments commenting={true} comments={this.state.comments} />
        <CommentForm self={this.props.self} postId={this.props.postId} updateComments={this.updateComments}/>
      </div>
    }
    else {
      comment = <IconContext.Provider value={{ color: "gray", className: "icons global-class-name", size: '2em' }}>
        <div>
          <FaComment />
        </div>
      </IconContext.Provider>;
      comments = <Comments commenting={false} comments={this.state.comments} />
    }
    return (      
      <Container fluid className="post-container">
        <Row><h1 className="details">{this.props.title}</h1></Row>
        <Row><p className="details"><i clickUser={this.clickUser}>{this.props.username}</i></p></Row>
        <Row><p className="details">{this.props.description}</p></Row>
        <Row>
          <Col />
            <Col>
              <Row><p className="details">Time</p></Row>
              <Row><p className="details">{this.props.totalTime}</p></Row>
            </Col>
            <Col>
              <Row><p className="details">Serves</p></Row>
              <Row><p className="details">{this.props.serves}</p></Row>
            </Col>
            <Col />

        </Row>
        <Row><p className="details">{this.props.tags}</p></Row>
        <Row onClick={this.handleClickIngredients} className="expandable"><Col xs={2}><p className="expandable-title">Ingredients</p></Col><Col /><Col xs={1}>{toggleI}</Col></Row>
        {ingredients}
        <Row onClick={this.handleClickDirections} className="expandable"><Col xs={2}><p className="expandable-title">Directions</p></Col><Col /><Col xs={1}>{toggleD}</Col></Row>
        {directions}
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

export default Recipe;