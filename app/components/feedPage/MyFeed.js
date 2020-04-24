import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Recipe from './Recipe'
import Review from './Review'

import '../../css/feed.css'

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
        post = <Recipe self={this.props.self} clickUser={this.props.clickUser} postId={this.props.posts[i]._id} title={this.props.posts[i].title} username={this.props.posts[i].postedBy.username} author={this.props.posts[i].postedBy.username} description={this.props.posts[i].description} totalTime={this.props.posts[i].totalTime} serves={this.props.posts[i].serves} tags={this.props.posts[i].tags} ingredients={this.props.posts[i].ingredients} directions={this.props.posts[i].directions} comments={this.props.posts[i].comments} />;
      }
      else {
        //review
        post = <Review self={this.props.self} clickUser={this.props.clickUser} postId={this.props.posts[i]._id} restaurant={this.props.posts[i].restaurant} username={this.props.posts[i].postedBy.username} dish={this.props.posts[i].dish} user={this.props.posts[i].postedBy.username} rate={this.props.posts[i].rate} tags={this.props.posts[i].tags} review={this.props.posts[i].review} comments={this.props.posts[i].comments} />;

      }
      postArray.push(
        <Row key={i}>{post}</Row>
      );
    }
    if (len == 0) {
      postArray = <Container fluid>
        <Row>
          <Col />
          <Col className="no-content">
            <p className="no-content-text">There are no posts in My Feed yet! Here you can view posts from accounts you follow. To follow an account, search the accounts username using the search feature </p>
          </Col>
          <Col />
        </Row>
      </Container>
    }
    return (
      <Container fluid>
        {postArray}
      </Container>
    )
  }
}

export default MyFeed;