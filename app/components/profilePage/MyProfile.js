import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import MyBooks from './MyBooks';
import MyPosts from './MyPosts';

class MyProfile extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {

    return (
      <Container fluid>
        <Row><h1>{this.props.name}</h1></Row>
        <Row><p><i>{this.props.username}</i></p></Row>
        <Row><p><i>followers: {this.props.followers} following:{this.props.following}</i></p></Row>
        <Row><h4>{this.props.restrictions}</h4></Row>
        <Container fluid>
          <Row><h4>My Books</h4></Row>
          {
            <MyBooks myBooks={this.props.myBooks} />
          }
        </Container>
        <Container fluid>
          <Row><h4>My Posts</h4></Row>
          {
            <MyPosts myPosts={this.props.myPosts} />
          }
        </Container>
      </Container>
    )
  }
}

export default MyProfile;