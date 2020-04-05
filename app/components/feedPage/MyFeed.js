import React from 'react';
import '../../css/Post.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Recipe from './Recipe'
import Review from './Review'

class MyFeed extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const len = this.props.posts.length;
    let postArray = [];
    for (var i = 0; i < len; i++) {
      let post;
      if (this.props.posts[i].type == 'recipe') {
        post = <Recipe title={this.props.posts[i].title} author={this.props.posts[i].author} description={this.props.posts[i].description} totalTime={this.props.posts[i].totalTime} serves={this.props.posts[i].serves} tags={this.props.posts[i].tags} ingredients={this.props.posts[i].ingredients} directions={this.props.posts[i].directions} comments={this.props.posts[i].comments}/>;
      }
      else {
        //review
        post = <Review restaurant={this.props.posts[i].restaurant} dish={this.props.posts[i].dish} user={this.props.posts[i].user} rate={this.props.posts[i].rate} tags={this.props.posts[i].tags} review={this.props.posts[i].review} comments={this.props.posts[i].comments}/>;

      }
      postArray.push(
        <Row key={i}>{post}</Row>
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