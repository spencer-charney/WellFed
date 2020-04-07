import React from 'react';
import Discover from './Discover';
import MyFeed from './MyFeed'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import NewPost from '../NewPost/NewPost';

import '../../css/feed.css'

class Feed extends React.Component {
  constructor(props) {
    super(props);
    this.handleClickMyFeed = this.handleClickMyFeed.bind(this);
    this.handleClickDiscover = this.handleClickDiscover.bind(this);
    this.handleClickCreate = this.handleClickCreate.bind(this);
    this.state = { feed: 'Discover' }
  }
  handleClickMyFeed() {
    this.setState({ feed: 'MyFeed' })
  }
  handleClickDiscover() {
    this.setState({ feed: 'Discover' })
  }
  handleClickCreate() {
    this.setState({ feed: 'Create' })
  }
  render() {
    let feedState;
    if (this.state.feed == "MyFeed") {
      feedState = <MyFeed posts={this.props.myFeedPosts} />
    }
    else if (this.state.feed == "Discover") {
      feedState = <Discover posts={this.props.discoverPosts} />
    }
    else {
      feedState = <NewPost />
    }
    return (
      <Container fluid>
        <Row className="feed-button-row">
          <Col></Col>

          <Col xs={2} onClick={this.handleClickMyFeed} className="feed-button"><h2>My Feed</h2></Col>
          <Col xs={2} onClick={this.handleClickDiscover} className="feed-button"><h2>Discover</h2></Col>
          <Col xs={2} onClick={this.handleClickCreate} className="feed-button"><h2>Create New Post</h2></Col>
          <Col></Col>

        </Row>
        {feedState}
      </Container>
    )
  }
}

export default Feed;