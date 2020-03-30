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
      const posts = [<Review restaurant={"Krusty Krab"} dish={"Pretty Patty"} user={"Plankton"} rate={"5"} tags={"Vegan"} review={"This is the most beautiful and tasty veggie patty I've ever had. I wish I had the recipe >:D"}/>,
      <Recipe title={"Easy Vegan Tacos"} author={"Sonja and Ryan"} description={"Looking for easy vegan tacos? These “verde” vegan tacos are color-themed, featuring green lentils, green cabbage, and a bright green cilantro sauce."} 
      totalTime={"30 minutes"} serves={4} tags={["Vegan"]} ingredients={["1 1/2 cups green lentils","2 tablespoons olive oil", "1 teaspoon cumin", "1 teaspoon garlic powder",
    "3/4 teaspoon kosher salt","Fresh ground pepper","8 One Degree sprouted organic corn tortillas","2 green onions","1/2 small green cabbage","Salsa verde (purchased or homemade)",
    "Creamy Cilantro Sauce, to serve", "Avocado or pickled jalapenos, optional"]}
       directions={["Soak the cashews for the Creamy Cilantro Sauce for at least 30 minutes while making the remainder of the recipe (for a high speed blender), or soak them overnight or the morning of if you think of it. The longer the better! (You also can make the sauce ahead — see instructions in the cilantro sauce recipe!).",
       "Place the lentils in a pot with 6 cups warm water. Bring to a low boil, then boil for about 15 to 20 minutes until just al dente (taste often to assess doneness). Drain, then stir in the olive oil, cumin, garlic powder, and kosher salt.",
       "Thinly slice the green onions. Thinly slice the cabbage. If using, chop the avocado.",
       "Meanwhile, make the Creamy Cilantro Sauce.",
       "Warm the tortillas according to the package instructions*. (We typically char ours on an open flame, but that’s not the preferred method with the One Degree tortillas.) To serve, top the tortillas with lentils, green onions, green cabbage, salsa verde, torn cilantro leaves, and cilantro drizzle."]}/>,
       <Review restaurant={"The Chum Bucket"} dish={"Fried Chum"} user={"Karen"} rate={"0"} tags={"NOT VEGAN"} review={"This is one of the worst things I've ever put in my computer body."}/>];
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