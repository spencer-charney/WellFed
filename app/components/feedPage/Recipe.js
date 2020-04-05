import React from 'react';
import '../../css/Post.css'
import { IconContext } from "react-icons";
import { FaComment, FaBook } from 'react-icons/fa';
import { FaBookmark } from 'react-icons/fa';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Comments from './Comments'
import CommentForm from './CommentForm';


class Recipe extends React.Component {
  constructor(props) {
    super(props);
    this.handleClickIngredients = this.handleClickIngredients.bind(this);
    this.handleClickDirections = this.handleClickDirections.bind(this);
    this.handleClickBookmark = this.handleClickBookmark.bind(this);
    this.handleClickComment = this.handleClickComment.bind(this);
    this.state = {
      ingredientsClicked: false,
      directionsClicked: false,
      bookmarkClicked: false,
      commentClicked: false
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
  render() {

    let ingredients;
    if (this.state.ingredientsClicked) {
    ingredients =  <Row>{this.props.ingredients}</Row>
    }
    else {
      ingredients = <div></div>
    }
  
    let directions;
    if (this.state.directionsClicked) {
    directions =  <Row>{this.props.directions}</Row>
    }
    else {
      directions = <div></div>
    }
    let bookmark;
    if (this.state.bookmarkClicked) {
      bookmark = <IconContext.Provider value={{ color: "green", className: "icons global-class-name", size: '2em' }}>
        <div>
          <FaBookmark />
        </div>
      </IconContext.Provider>
      console.log("Bookmark Post");

    }
    else {
      bookmark = <IconContext.Provider value={{ color: "gray", className: "icons global-class-name", size: '2em' }}>
        <div>
          <FaBookmark />
        </div>
      </IconContext.Provider>
    }
    let comment;
    let comments;
    if (this.state.commentClicked) {
      comment = <IconContext.Provider value={{ color: "green", className: "icons global-class-name", size: '2em' }}>
        <div>
          <FaComment />
        </div>
      </IconContext.Provider>;
      comments = <div>
        <Comments commenting={true} comments={[]} />
        <CommentForm />
      </div>

    }
    else {
      comment = <IconContext.Provider value={{ color: "gray", className: "icons global-class-name", size: '2em' }}>
        <div>
          <FaComment />
        </div>
      </IconContext.Provider>;
      comments = <Comments commenting={false} comments={[]} />

    }
    return (
      <Container fluid>
        <Row><h1>{this.props.title}</h1></Row>
        <Row><p><i>{this.props.author}</i></p></Row>
        <Row><p>{this.props.description}</p></Row>
        <Row>
          <Col>
          <Row><p>Total Time</p></Row>
          <Row><p>{this.props.totalTime}</p></Row>
          </Col>
          <Col>
          <Row><p>Serves</p></Row>
          <Row><p>{this.props.serves}</p></Row>
          </Col>
        </Row>
        <Row><p>{this.props.tags}</p></Row>
        <Row onClick={this.handleClickIngredients}>Ingredients</Row>
        {ingredients}
        <Row onClick={this.handleClickDirections}>Directions</Row>
        {directions}
        <Container fluid>
          {comments}
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
      </Container>
      )
  }
}

export default Recipe;