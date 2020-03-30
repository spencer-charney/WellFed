import React from 'react';
import '../../css/Post.css'
import { IconContext } from "react-icons";
import { FaComment, FaBook } from 'react-icons/fa';
import { FaBookmark } from 'react-icons/fa';
import { FaTelegramPlane } from 'react-icons/fa';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



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
    const ingredientsList = this.props.ingredients.map((ingredient) =>
      <li>{ingredient}</li>
    );
    let ingredientsUl;
    if (this.state.ingredientsClicked) {
      ingredientsUl = <ul id="ingredients">
        {ingredientsList}
      </ul>
    }
    else {
      ingredientsUl = <div></div>
    }
    const directionsList = this.props.directions.map((direction) =>
      <li>{direction}</li>
    );
    let directionsOl;
    if (this.state.directionsClicked) {
      directionsOl = <ol id="directions">
        {directionsList}
      </ol>
    }
    else {
      directionsOl = <div></div>
    }
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
      </IconContext.Provider>;
    }
    else {
      comment = <IconContext.Provider value={{ color: "gray", className: "icons global-class-name", size: '2em' }}>
        <div>
          <FaComment />
        </div>
      </IconContext.Provider>;
    }
    return (
      <div className="recipe">
        <div className="container">
          <center>
            <h1>{this.props.title}</h1>
            <p id="other-user"><i>{this.props.author}</i></p>
            <p>{this.props.description}</p>

            <div className="row justify-content-md-center details">
              <div className="col-sm-auto">
                <p>Total Time</p>
                <p>{this.props.totalTime}</p>
              </div>
              <div className="col-sm-auto">
                <p>Serves</p>
                <p>{this.props.serves}</p>
              </div>
            </div>
            <div className="row justify-content-md-center">
              <div className="col-auto">
                <p>Vegan</p>
              </div>
            </div>
          </center>
        </div>
        <div className="container">
          <h2 className="expandable" onClick={this.handleClickIngredients}>Ingredients</h2>
          {ingredientsUl}
        </div>
        <div className="container">
          <h2 className="expandable" onClick={this.handleClickDirections}>Directions</h2>
          {directionsOl}
        </div>
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

export default Recipe;