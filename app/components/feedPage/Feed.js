import React from 'react';
import Discover from './Discover';
import MyFeed from './MyFeed'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import NewPost from '../NewPost/NewPost';
import { IconContext } from "react-icons";
import { IoIosPerson, IoIosPeople } from "react-icons/io";
import { AiOutlinePlus } from "react-icons/ai";
import { GoSearch } from "react-icons/go";
import SearchReturnArea from "./SearchReturnArea"
import {searchUser, isAuthenticated} from '../landingPage/Auth'


import '../../css/feed.css'


class Feed extends React.Component {
  constructor(props) {
    super(props);
    this.handleClickMyFeed = this.handleClickMyFeed.bind(this);
    this.handleClickDiscover = this.handleClickDiscover.bind(this);
    this.handleClickCreate = this.handleClickCreate.bind(this);
    this.handleClickSearch = this.handleClickSearch.bind(this);
    this.handleChangeSearch = this.handleChangeSearch.bind(this);
    this.collapseClicked = this.collapseClicked.bind(this);
    this.sendSearch = this.sendSearch.bind(this);
    this.state = {
      feed: 'Discover',
      searchClicked: false,
      search: '',
      sendSearch: false
    }
  }
  handleClickMyFeed() {
    this.props.updatePosts();
    this.setState({ feed: 'My Feed' })
  }
  handleClickDiscover() {
    this.props.updatePosts();
    this.setState({ feed: 'Discover' })
  }
  handleClickCreate() {
    this.setState({ feed: 'Create' })
  }
  handleClickSearch() {
    if (this.state.searchClicked) {
      this.setState({
        searchClicked: false,
        search: '',
        sendSearch: false,
        resultArray: []
      })
    }
    else
      this.setState({ searchClicked: true });
  }
  handleChangeSearch(event) {
    this.setState({ search: event.target.value });
  }
  sendSearch() {
    const auth = isAuthenticated();
    searchUser(this.state.search, auth.token).then(
      data => {
        if (data.error) {
          console.log(data.error);
        }
        else {
          this.setState({resultArray: data})
        }
      }
    )
    this.setState({
      sendSearch: true
    })
  }
  collapseClicked(){
    this.props.updatePosts();
    this.setState({
      sendSearch: false
    })
  }
  render() {
    let feedState;
    if (this.state.feed == "My Feed") {
      feedState = <MyFeed self={this.props.self} posts={this.props.myFeedPosts} />;

    }
    else if (this.state.feed == "Discover") {
      feedState = <Discover self={this.props.self} posts={this.props.discoverPosts} />;

    }
    else {

      feedState = <NewPost updatePosts={this.props.updatePosts} self={this.props.self} />;

    }
    let search;
    if (this.state.searchClicked) {
      search =
        <Row className="search-area">
          <Col />
          <Col xs={5} md={3} lg={2}><input type="text" value={this.state.search} onChange={this.handleChangeSearch} className="search-text" /></Col>
          <Col xs={3} md={2} lg={1} onClick={this.sendSearch}><p className="search-button">search</p></Col>
        </Row>

    }
    else {
      search = <div></div>
    }
    let searchReturnArea;
    if (this.state.sendSearch) {
      searchReturnArea = <SearchReturnArea resultArray={this.state.resultArray} collapseClicked={this.collapseClicked}/>
    }
    else {
      searchReturnArea = <div></div>

    }
    return (
      <Container fluid>
        <Row className="feed-button-row">
          <Col><p className="feed-title">{this.state.feed}</p></Col>
          <Col xs={1} onClick={this.handleClickDiscover} className="feed-button">
            <IconContext.Provider value={{ size: '2em' }}>
              <div>
                <IoIosPeople />
              </div>
            </IconContext.Provider>
          </Col>
          <Col xs={1} onClick={this.handleClickMyFeed} className="feed-button">
            <IconContext.Provider value={{ size: '2em' }}>
              <div>
                <IoIosPerson />
              </div>
            </IconContext.Provider>
          </Col>
          <Col xs={1} onClick={this.handleClickCreate} className="feed-button">
            <IconContext.Provider value={{ size: '2em' }}>
              <div>
                <AiOutlinePlus />
              </div>
            </IconContext.Provider>
          </Col>
          <Col xs={1} onClick={this.handleClickSearch} className="feed-button">
            <IconContext.Provider value={{ size: '2em' }}>
              <div>
                <GoSearch />
              </div>
            </IconContext.Provider>
          </Col>
        </Row>
        {search}
        {searchReturnArea}
        <Row className="feed-state-row">
          <Col className="side" xs={1} />
          {feedState}
          <Col className="side" xs={1} />
        </Row>
      </Container>
    )
  }
}

export default Feed;