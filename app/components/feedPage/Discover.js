import React from 'react';
import '../../css/Post.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'


class Discover extends React.Component {
    constructor(props){
      super(props);
    }
    render() {
      const len = this.props.posts.length; 
      let postArray = [];
      for(var i = 0; i< len; i++){
        postArray.push(
          <Row key={i}>{this.props.posts[i]}</Row>
        );
      }
      return (
        <Container fluid>
          <Row><h1>Discover</h1></Row>
          <Row>This is where search for users will go</Row>
          {postArray}
        </Container>
      )
    }
  }
  
  export default Discover;