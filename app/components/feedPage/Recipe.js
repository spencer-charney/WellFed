import React from 'react';
import { IconContext } from "react-icons";
import { FaComment, FaBookmark, FaChevronUp, FaChevronDown } from 'react-icons/fa';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Comments from './Comments'
import CommentForm from './CommentForm';

import '../../css/feed.css'


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
      ingredients = <Row >{this.props.ingredients}</Row>
      toggleI = <FaChevronUp />
    }
    else {
      ingredients = <div></div>
      toggleI = <FaChevronDown />
    }

    let directions;
    if (this.state.directionsClicked) {
      directions = <Row>{this.props.directions}</Row>
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
      console.log("Bookmark Post");
      selector = <Row><Col /><Col xs={3}>Selector Object Here</Col></Row>
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
        <Comments commenting={true} comments={this.props.comments} />
        <CommentForm />
      </div>
    }
    else {
      comment = <IconContext.Provider value={{ color: "gray", className: "icons global-class-name", size: '2em' }}>
        <div>
          <FaComment />
        </div>
      </IconContext.Provider>;
      comments = <Comments commenting={false} comments={this.props.comments} />
    }
    return (
      <Container fluid className="post-container">
        <Row><h1 className="details">{this.props.title}</h1></Row>
        <Row><p className="details"><i>{this.props.author}</i></p></Row>
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
        <Row onClick={this.handleClickIngredients} className="expandable"><Col xs={2}>Ingredients</Col><Col /><Col xs={1}>{toggleI}</Col></Row>
        {ingredients}
        <Row onClick={this.handleClickDirections} className="expandable"><Col xs={2}>Directions</Col><Col /><Col xs={1}>{toggleD}</Col></Row>
        {directions}
        <Container fluid>
          {comments}
          <Row className="userActionRow">
            <Col />
            <Col xs={1}>
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