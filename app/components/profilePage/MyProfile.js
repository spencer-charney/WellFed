import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import MyBooks from './MyBooks';
import MyPosts from './MyPosts';

import '../../css/profile.css'

class MyProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      book: 'My Posts'
    }
    this.handleMyBooksClicked = this.handleMyBooksClicked.bind(this);
    this.handleMyPostsClicked = this.handleMyPostsClicked.bind(this);
  }
  handleMyBooksClicked() {
    this.setState({ book: 'My Books' });
  }
  handleMyPostsClicked() {
    this.setState({ book: 'My Posts' });
  }
  render() {
    let book;
    let myBooksTab;
    let myPostsTab;
    if (this.state.book == 'My Posts') {
      book = <Container fluid>
        <Row><h4 className="details">My Posts</h4></Row>
        {
          <MyPosts self={this.props.self} myPosts={this.props.myPosts} />
        }
      </Container>
      myPostsTab = <Col onClick={this.handleMyPostsClicked} className="book-clicked"><p>My Posts</p></Col>
      myBooksTab = <Col onClick={this.handleMyBooksClicked} className="book-not-clicked"><p>My Books</p></Col>;
    }
    else {
      book = <Container fluid className="my-books-container">
        <Row><h4 className="details">My Books</h4></Row>
        {
          <MyBooks myBooks={this.props.myBooks} />
        }
      </Container>
      myPostsTab = <Col onClick={this.handleMyPostsClicked} className="book-not-clicked"><p>My Posts</p></Col>
      myBooksTab = <Col onClick={this.handleMyBooksClicked} className="book-clicked"><p>My Books</p></Col>
    }
    return (
      <Container fluid className="profile-page">
        <Row><h1 className="details">{this.props.name}</h1></Row>
        <Row><p className="details"><i>{this.props.username}</i></p></Row>
        <Row><p className="details"><i>followers: {this.props.followers} following:{this.props.following}</i></p></Row>
        <Row><h4 className="details">{this.props.restrictions}</h4></Row>
    <Row className="book-row">{myPostsTab}{myBooksTab}</Row>

        {book}
      </Container>
    )
  }
}

export default MyProfile;