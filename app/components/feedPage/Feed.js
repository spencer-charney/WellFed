import React from 'react';
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Discover from './Discover';
import MyFeed from './MyFeed'
import '../../css/Post.css'


class Feed extends React.Component {
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {feed: 'Discover'}
  }
  handleClick(e){
    this.setState({feed: e.target.value})
  }
  render() {
    const feedState = (this.state.feed=='Discover') ? <Discover /> : <MyFeed /> ;
    return (
      <div>
        <center>
          <ButtonGroup>
            <button className="btn btn-default" value="MyFeed" onClick={this.handleClick}>My Feed</button>
            <button className="btn btn-default" value="Discover" onClick={this.handleClick}>Discover</button>
          </ButtonGroup>
        </center>
        {feedState}
      </div>
      
    )
  }
}
  
export default Feed;