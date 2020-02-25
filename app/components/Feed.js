import React from 'react';
import ButtonGroup from 'react-bootstrap/ButtonGroup'

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
    const feedState = (this.state.feed=='Discover') ? <h1>D</h1> : <h1>M</h1> ;
    return (
      <center>
        <ButtonGroup>
          <button className="btn btn-default" value="MyFeed" onClick={this.handleClick}>My Feed</button>
          <button className="btn btn-default" value="Discover" onClick={this.handleClick}>Discover</button>
        </ButtonGroup>
        {feedState}
      </center>
    )
  }
}
  
export default Feed;