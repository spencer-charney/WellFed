import React from 'react';

class ReviewForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurant:'',
      dish:'',
      rate:'',
      tags:'',
      review:''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangeRestaurant = this.handleChangeRestaurant.bind(this);
    this.handleChangeDish = this.handleChangeDish.bind(this);
    this.handleChangeRate = this.handleChangeRate.bind(this);
    this.handleChangeTags = this.handleChangeTags.bind(this);
    this.handleChangeReview = this.handleChangeReview.bind(this);
  }

  handleSubmit(event) {
    //THis is where one would send a message to the server
    console.log(this.state.restaurant);
    console.log(this.state.dish);
    console.log(this.state.rate);
    console.log(this.state.tags);
    console.log(this.state.review);
    //See if one can remove the below line and still post to the server
    event.preventDefault();
  }

  handleChangeTitle(event) {
    this.setState({ title: event.target.value });
  }

  handleChangeRestaurant(event) {
    this.setState({ restaurant: event.target.value });
  }

  handleChangeDish(event) {
    this.setState({ dish: event.target.value });

  }

  handleChangeRate(event) {
    this.setState({ rate: event.target.value });

  }

  handleChangeTags(event) {
    this.setState({ tags: event.target.value });
  }

  handleChangeReview(event) {
    this.setState({ review: event.target.value });

  }

  render() {
    return (
      <div>
        <center>
          <h2>New Review</h2>
        </center>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>
              Restaurant:
                    </label>
            <input type="text" value={this.state.title} onChange={this.handleChangeRestaurant} className="form-control" placeholder="Name of the Resturant" />
          </div>
          <div className="form-group">
            <label >
              Dish:
                    </label>
             <input type="text" value={this.state.dish} onChange={this.handleChangeDish} className="form-control" placeholder="Name of the dish" />
          </div>
          <div className="form-group">
            <label >
              Rate:
                    </label>
                    <div>
                      <input type="text" value={this.state.rate} onChange={this.handleChangeRate} className="form-control" placeholder="Please put a number between 0-5 stars" />
                      <label>out of 5</label>
                    </div>
          </div>
          <div className="form-group">
            <label>
              Tags:
                    </label>
            <input type="text" value={this.state.tags} onChange={this.handleChangeTags} className="form-control" placeholder="Please separate values with a comma (eg. Vegan, Gluten Free, etc.)" />
          </div>
          <div className="form-group">
            <label >
              Review:
                    </label>
            <textarea value={this.state.review} onChange={this.handleChangeReview} rows="6" className="form-control" />
          </div>
          <center>
            <div className="row"> 
              <input type="submit" value="Post" className="btn btn-primary col" />
            </div>
          </center>
        </form>
      </div>
    )
  }
}

export default ReviewForm;