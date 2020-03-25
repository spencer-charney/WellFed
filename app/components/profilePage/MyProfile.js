import React from 'react';

class MyProfile extends React.Component {
  render() {
    return (
      <center>
        <h1>User's Name</h1>
        <h2><i>username</i></h2>
        <h3>My Restrictions</h3>
        <div class="container-fluid">
          <h3>My Recipe Books</h3>
          <div class="row">
            <div class="col-sm-3 k1">
              <h4>Kid1</h4>
              <p>tags</p>
            </div>
            <div class="col-sm-3 k2">
              <h4>Kid2</h4>
              <p>tags</p>
            </div>
            <div class="col-sm-3 sp">
              <h4>Spounce</h4>
              <p>tags</p>
            </div>
            <div class="col-sm-3 k1">
              <h4>Kid1</h4>
              <p>tags</p>
            </div>
          </div>
        </div>
        <div class="container-fluid">
          <h3>My Posts</h3>
          <div class="col-sm po">
            <p>My Posts</p>
          </div>
        </div>
      </center>
    )
  }
}

export default MyProfile;