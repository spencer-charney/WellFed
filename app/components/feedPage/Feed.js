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
    this.setState({ feed: 'My Feed' })
  }
  handleClickDiscover() {
    this.setState({ feed: 'Discover' })
  }
  handleClickCreate() {
    this.setState({ feed: 'Create' })
  }
  render() {
    let feedState;
    if (this.state.feed == "My Feed") {
      feedState = <MyFeed posts={this.props.myFeedPosts} />;

    }
    else if (this.state.feed == "Discover") {
      feedState = <Discover posts={this.props.discoverPosts} />;

    }
    else {

      feedState = <NewPost />;

    }
    return (
      <Container fluid>
        <Row className="feed-button-row">
          <Col xs={1} onClick={this.handleClickMyFeed} className="feed-button"><h3>My Feed</h3></Col>
          <Col xs={1} onClick={this.handleClickDiscover} className="feed-button"><h3>Discover</h3></Col>
          <Col xs={1} onClick={this.handleClickCreate} className="feed-button"><h3>Create</h3></Col>
          <Col><h1>{this.state.feed}</h1></Col>
          <Col xs={2}>This is where search for users will go</Col>
        </Row>
        <Row>
          {feedState}
        </Row>
      </Container>
    )
  }
}

export default Feed;