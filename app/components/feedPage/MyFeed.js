import React from 'react';
import '../../css/Post.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'


class MyFeed extends React.Component {
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
          <Row><h1>My Feed</h1></Row>
          {postArray}
        </Container>
      )
    }
  }
  
  export default MyFeed;