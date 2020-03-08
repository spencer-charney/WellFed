import React from 'react';
import Post from './Post'
import Recipe from './Recipe'
import Review from './Review'
import '../../css/Post.css'


class MyFeed extends React.Component {
    constructor(props){
      super(props);
    }
    render() {
      //const postList = this.props.postList;
      const posts = [<Review />,<Recipe title={"WeedKrispies"} author={"Recipe by Briiiian"} description={"These tasty vegan snacks are sure to have you shmeezing"} 
      totalTime={"4-5 hours"} serves={16} tags={["Vegan", "Gluten Free", "Edible"]} ingredients={["3.5 grams of gas","3/4ths of a cup of coconut oil", "5 cups of vegan marshmallows", "6 cups of puffed rice cereal"]}
       directions={["Preheat oven to 240F","Grind weed and put on a pan or foil bowl","Put weed in the oven for 45 minutes to decarb","In a small pot, heat coconut oil to 185F-215F",
       "When the weed is ready to come out of the oven, add it to the oil and let cook for 2 hours","After the 2 hours, add the marshmallows to a large pan and stir over low heat until melted",
       "Strain the oil in order to remove all the flower, and add the oil to the marshmallows","Stir in the puffed rice cereal and continue to stir until evenly mixed",
       "Transfer this mixture into a 13x9 pan and put in the refridgerator for 1-2 hours","Cut and enjoy"]}/>,<Review />];
      const postList = posts.map((post)=> 
        <li key={post.props.id}>
          <Post>{post}</Post>
        </li>     
      );
      return (
        <div>
          <center>
            <h1>My Feed</h1>
          </center>
          <div>
            <ul>
              {postList}
            </ul>
          </div>
        </div>
      )
    }
  }
  
  export default MyFeed;