import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import MyBooks from './MyBooks';
import MyPosts from './MyPosts';

import '../../css/profile.css'

class MyProfile extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {

    return (
      <Container fluid className="scroll">
        <Row><h1 className="details">{this.props.name}</h1></Row>
        <Row><p className="details"><i>{this.props.username}</i></p></Row>
        <Row><p className="details"><i>followers: {this.props.followers} following:{this.props.following}</i></p></Row>
        <Row><h4 className="details">{this.props.restrictions}</h4></Row>
        <Container fluid>
          <Row><h4 className="details my-books">My Books</h4></Row>
          {
            <MyBooks myBooks={this.props.myBooks} />
          }
        </Container>
        <Container fluid>
          <Row><h4 className="details">My Posts</h4></Row>
          {
            <MyPosts myPosts={this.props.myPosts} />
          }
        </Container>
      </Container>
    )
  }
}

export default MyProfile;