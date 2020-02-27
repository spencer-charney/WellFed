import React from 'react';
import '../../css/Post.css'

class Recipe extends React.Component {
  constructor(props) {
    super(props);
    this.handleClickIngredients = this.handleClickIngredients.bind(this);
    this.handleClickDirections = this.handleClickDirections.bind(this);
    this.state = {
      ingredientsClicked: false,
      directionsClicked: false
    };
  }
  handleClickIngredients() {
    if (this.state.ingredientsClicked) {
      this.setState({ ingredientsClicked: false });
    }
    else {
      this.setState({ ingredientsClicked: true });
    }
  }
  handleClickDirections() {
    if (this.state.directionsClicked) {
      this.setState({ directionsClicked: false });
    }
    else {
      this.setState({ directionsClicked: true });
    }
  }
  render() {
    let ingredients;
    if (this.state.ingredientsClicked) {
      ingredients = <ul id="ingredients">
        <li>3.5 grams of gas</li>
        <li>3/4ths of a cup of coconut oil</li>
        <li>5 cups of vegan marshmallows</li>
        <li>6 cups of puffed rice cereal</li>
      </ul>
    }
    else {
      ingredients = <div></div>
    }
    let directions;
    if (this.state.directionsClicked) {
      directions = <ol id="directions">
        <li>Preheat oven to 240&deg;F</li>
        <li>Grind weed and put on a pan or foil bowl</li>
        <li>Put weed in the oven for 45 minutes to decarb</li>
        <li>In a small pot, heat coconut oil to 185&deg;F-215&deg;F</li>
        <li>When the weed is ready to come out of the oven, add it to the oil and let cook for 2 hours</li>
        <li>After the 2 hours, add the marshmallows to a large pan and stir over low heat until melted</li>
        <li>Strain the oil in order to remove all the flower, and add the oil to the marshmallows</li>
        <li>Stir in the puffed rice cereal and continue to stir until evenly mixed</li>
        <li>Transfer this mixture into a 13x9 pan and put in the refridgerator for 1-2 hours</li>
        <li>Cut and enjoy</li>
      </ol>
    }
    else {
      directions = <div></div>
    }
    return (
      <div className="recipe">
        <div className="container">
          <center>
            <h1>WeedKrispies</h1>
            <p id="other-user"><i>Recipe by Briiiian</i></p>
            <p>These tasty vegan snacks are sure to have you shmeezing</p>

            <div className="row justify-content-md-center details">
              <div className="col-sm-auto">
                <p>Total Time</p>
                <p>4-5 hours</p>
              </div>
              <div className="col-sm-auto">
                <p>Serves</p>
                <p>16</p>
              </div>
            </div>
            <div className="row justify-content-md-center">
              <div className="col-auto">
                <p>Vegan</p>
              </div>
              <div className="col-auto">
                <p>Gluten Free</p>
              </div>
              <div className="col-auto">
                <p>Edible</p>
              </div>
            </div>
          </center>
        </div>
        <div className="container">
          <h2 onClick={this.handleClickIngredients}>Ingredients</h2>
          {ingredients}
        </div>
        <div className="container">
          <h2 onClick={this.handleClickDirections}>Directions</h2>
          {directions}
        </div>
      </div>
    )
  }
}

export default Recipe;