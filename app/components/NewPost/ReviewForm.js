import React from 'react';
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'
import '../../css/feed.css'
import { createPost } from "./ApiPost";
import { isAuthenticated } from "../landingPage/Auth";

class ReviewForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurant: '',
      dish: '',
      rate: '',
      tags: '',
      review: '',
      error: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangeRestaurant = this.handleChangeRestaurant.bind(this);
    this.handleChangeDish = this.handleChangeDish.bind(this);
    this.handleChangeRate = this.handleChangeRate.bind(this);
    this.handleChangeTags = this.handleChangeTags.bind(this);
    this.handleChangeReview = this.handleChangeReview.bind(this);
  }

  handleSubmit(event) {
    const { restaurant, dish, rate, tags, review } = this.state;
    const type = "review";
    const recipe = {
      type,
      restaurant,
      dish,
      rate,
      tags,
      review
    };

    const auth = isAuthenticated();

    const userId = auth.user._id;
    const token = auth.token;
    createPost(userId, token, recipe).then(
      data => {
        if (data.error) {
            this.setState({ error: data.error });
            console.log(data.error)
        }else {
          this.props.updatePosts();
          window.location.reload(false)
        }
    })
  }

  handleChangeTitle(event) {
    this.setState({ title: event.target.value });
  }

  handleChangeRestaurant(event) {
    this.setState({ restaurant: event.target.value });
  }

  handleChangeDish(event) {
    this.setState({ dish: event.target.value });

  }

  handleChangeRate(event) {
    this.setState({ rate: event.target.value });

  }

  handleChangeTags(event) {
    this.setState({ tags: event.target.value });
  }

  handleChangeReview(event) {
    this.setState({ review: event.target.value });

  }

  render() {
    return (
      <Container fluid>
        <Row><h3>New Review</h3></Row>
        <Row>Restaurant:</Row>
        <Row><input type="text" value={this.state.title} onChange={this.handleChangeRestaurant} className="form-control" placeholder="Name of the Resturant" /></Row>
        <Row>Dish:</Row>
        <Row><input type="text" value={this.state.dish} onChange={this.handleChangeDish} className="form-control" placeholder="Name of the dish" /></Row>
        <Row>Rate:</Row>
        <Row>
          <Col><input type="text" value={this.state.rate} onChange={this.handleChangeRate} className="form-control" placeholder="Please put a number between 0-5 stars" /></Col>
          <Col>out of 5</Col>
        </Row>
        <Row>Tags:</Row>
        <Row><input type="text" value={this.state.tags} onChange={this.handleChangeTags} className="form-control" placeholder="Please separate values with a comma (eg. Vegan, Gluten Free, etc.)" /></Row>
        <Row>Review:</Row>
        <Row><textarea value={this.state.review} onChange={this.handleChangeReview} rows="6" className="form-control" /></Row>
        <Row onClick={this.handleSubmit} className="form-row-submit">
          <p className="form-row-submit-text">Post</p>
        </Row>
      </Container>
    )
  }
}

export default ReviewForm;