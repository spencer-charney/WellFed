import React from 'react';

class Navigation extends React.Component {
  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e){
    this.props.onComponentChange(e.target.value);
  }
  
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/">Well Fed</a>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className={"nav-item active"}>
              <button className="btn btn-light" value="MyProfile" onClick={this.handleChange}>My Profile</button>
            </li>
            <li className={"nav-item active"}>
              <button className="btn btn-light" value="Notifications" onClick={this.handleChange}>Notifications</button>
            </li>
            <li className={"nav-item active"}>
              <button className="btn btn-light" value="Feed" onClick={this.handleChange}>Feed</button>
            </li>          
            <li className={"nav-item active"}>
              <button className="btn btn-light" value="Post" onClick={this.handleChange}>Create New Post</button>
            </li>   
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>
        </div>
      </nav>
    )
  }
}

export default Navigation;