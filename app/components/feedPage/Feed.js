import React from 'react';
import Discover from './Discover';
import MyFeed from './MyFeed'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import '../../css/Post.css'
import NewPost from '../NewPost/NewPost';


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
      feedState = <MyFeed />
    }
    else if (this.state.feed == "Discover") {
      feedState = <Discover />
    }
    else {
      feedState = <NewPost />
    }
    return (
      <Container fluid>
        <Row>
          <Col onClick={this.handleClickMyFeed}>My Feed</Col>
          <Col onClick={this.handleClickDiscover}>Discover</Col>
          <Col onClick={this.handleClickCreate}>Create New Post</Col>
        </Row>
        {feedState}
      </Container>
    )
  }
}

export default Feed;