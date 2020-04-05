import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Navigation from './components/Navigation'
import Feed from './components/feedPage/Feed'
import MyProfile from './components/profilePage/MyProfile'
import NotificationsPage from './components/notificationsPage/NotificationsPage'
import Post from './components/NewPost/NewPost'
import Recipe from './components/feedPage/Recipe'
import Review from './components/feedPage/Review'

class App extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = { pageState: 'MyFeed' }
    }
    handleClick(newPageState) {
        this.setState({ pageState: newPageState })
    }
    render() {
        const pageState = this.state.pageState;
        let page;
        if (pageState == 'MyProfile') {
            page = <MyProfile name="Brian Greeley" username="420PAWGlover" restrictions="Four Lokos, dry pussy" myBooks={[{
                name: "Kid1", posts: [
                    <Recipe title={"Vegan Fettuccine Alfredo"} author={"Sonja and Alex"} description={"WOW! This vegan fettuccine alfredo tastes decadent, but the creamy sauce is filled with healthy plant based ingredients. An easy dinner in under 30 minutes!"}
                        totalTime={"25 minutes"} serves={8} tags={["Vegan"]} ingredients={["1 pound fettuccine noodles (use gluten-free, legume, or zucchini noodles if desired)",
                            "4 garlic cloves", "1 small head cauliflower (1 1/2 to 2 pounds), enough for 6 cups florets", "4 tablespoons olive oil", "1 cup raw unsalted cashews",
                            "2 cups vegetable broth", "1/8 teaspoon onion powder", "1/8 + 1/4 teaspoon ground black pepper", "Pinch nutmeg", "1 teaspoon kosher salt", "Finely chopped parsley, to serve"]}
                        directions={["Mince the garlic. Chop the cauliflower.", "Make the pasta: Bring a large pot of salted water to a boil. Boil the pasta until it is al dente (start tasting a few minutes before the package recommends: you want it to be tender but still a little firm on the inside). Then drain the pasta and return it to the pot.",
                            "Meanwhile, start the sauce: Heat the olive oil in a large Dutch oven, pot, or saucepan (that has a cover) over medium heat. Add the cauliflower and cashews and saute for 4 minutes until lightly browned. Add the garlic and cook for 1 to 2 minutes until fragrant. Add the vegetable broth, onion powder, black pepper, nutmeg and 1/2 teaspoon kosher salt. Bring to a simmer, then cover and cook 6 to 7 minutes on medium high heat until the cauliflower is tender when pierced with a fork.",
                            "IBlend the sauce: Carefully transfer the contents to a blender and add the remaining 1/2 teaspoon kosher salt and 1/4 teaspoon more black pepper. Blend on high until a smooth sauce forms.",
                            "erve: Pour about 5 cups into 1 pound pasta (1 cup will be left over), or use it to taste. Top with finely chopped parsley and serve immediately."]} />,
                    <Review restaurant={"Super Weenie Hut Juniors"} dish={"Corndog"} user={"Spongebob Squarepants"} rate={"5"} tag={"NOT VEGAN"} review={"This corndog was great!"} />,
                    <Recipe title={"Easy Vegan Tacos"} author={"Sonja and Ryan"} description={"Looking for easy vegan tacos? These “verde” vegan tacos are color-themed, featuring green lentils, green cabbage, and a bright green cilantro sauce."}
                        totalTime={"30 minutes"} serves={4} tags={["Vegan"]} ingredients={["1 1/2 cups green lentils", "2 tablespoons olive oil", "1 teaspoon cumin", "1 teaspoon garlic powder",
                            "3/4 teaspoon kosher salt", "Fresh ground pepper", "8 One Degree sprouted organic corn tortillas", "2 green onions", "1/2 small green cabbage", "Salsa verde (purchased or homemade)",
                            "Creamy Cilantro Sauce, to serve", "Avocado or pickled jalapenos, optional"]}
                        directions={["Soak the cashews for the Creamy Cilantro Sauce for at least 30 minutes while making the remainder of the recipe (for a high speed blender), or soak them overnight or the morning of if you think of it. The longer the better! (You also can make the sauce ahead — see instructions in the cilantro sauce recipe!).",
                            "Place the lentils in a pot with 6 cups warm water. Bring to a low boil, then boil for about 15 to 20 minutes until just al dente (taste often to assess doneness). Drain, then stir in the olive oil, cumin, garlic powder, and kosher salt.",
                            "Thinly slice the green onions. Thinly slice the cabbage. If using, chop the avocado.",
                            "Meanwhile, make the Creamy Cilantro Sauce.",
                            "Warm the tortillas according to the package instructions*. (We typically char ours on an open flame, but that’s not the preferred method with the One Degree tortillas.) To serve, top the tortillas with lentils, green onions, green cabbage, salsa verde, torn cilantro leaves, and cilantro drizzle."]} />,
                ]
            }, {
                name: "Kids2", posts: [
                     <Review restaurant={"Super Weenie Hut Juniors"} dish={"Corndog"} user={"Spongebob Squarepants"} rate={"5"} tag={"NOT VEGAN"} review={"This corndog was great!"} />,
                    <Recipe title={"Easy Vegan Tacos"} author={"Sonja and Ryan"} description={"Looking for easy vegan tacos? These “verde” vegan tacos are color-themed, featuring green lentils, green cabbage, and a bright green cilantro sauce."}
                        totalTime={"30 minutes"} serves={4} tags={["Vegan"]} ingredients={["1 1/2 cups green lentils", "2 tablespoons olive oil", "1 teaspoon cumin", "1 teaspoon garlic powder",
                            "3/4 teaspoon kosher salt", "Fresh ground pepper", "8 One Degree sprouted organic corn tortillas", "2 green onions", "1/2 small green cabbage", "Salsa verde (purchased or homemade)",
                            "Creamy Cilantro Sauce, to serve", "Avocado or pickled jalapenos, optional"]}
                        directions={["Soak the cashews for the Creamy Cilantro Sauce for at least 30 minutes while making the remainder of the recipe (for a high speed blender), or soak them overnight or the morning of if you think of it. The longer the better! (You also can make the sauce ahead — see instructions in the cilantro sauce recipe!).",
                            "Place the lentils in a pot with 6 cups warm water. Bring to a low boil, then boil for about 15 to 20 minutes until just al dente (taste often to assess doneness). Drain, then stir in the olive oil, cumin, garlic powder, and kosher salt.",
                            "Thinly slice the green onions. Thinly slice the cabbage. If using, chop the avocado.",
                            "Meanwhile, make the Creamy Cilantro Sauce.",
                            "Warm the tortillas according to the package instructions*. (We typically char ours on an open flame, but that’s not the preferred method with the One Degree tortillas.) To serve, top the tortillas with lentils, green onions, green cabbage, salsa verde, torn cilantro leaves, and cilantro drizzle."]} />]
            }]} 
            myPosts={[
                <Review restaurant={"Krusty Krab"} dish={"Pretty Patty"} user={"Plankton"} rate={"5"} tags={"Vegan"} review={"This is the most beautiful and tasty veggie patty I've ever had. I wish I had the recipe >:D"}/>,
      <Recipe title={"Easy Vegan Tacos"} author={"Sonja and Ryan"} description={"Looking for easy vegan tacos? These “verde” vegan tacos are color-themed, featuring green lentils, green cabbage, and a bright green cilantro sauce."} 
      totalTime={"30 minutes"} serves={4} tags={["Vegan"]} ingredients={["1 1/2 cups green lentils","2 tablespoons olive oil", "1 teaspoon cumin", "1 teaspoon garlic powder",
    "3/4 teaspoon kosher salt","Fresh ground pepper","8 One Degree sprouted organic corn tortillas","2 green onions","1/2 small green cabbage","Salsa verde (purchased or homemade)",
    "Creamy Cilantro Sauce, to serve", "Avocado or pickled jalapenos, optional"]}
       directions={["Soak the cashews for the Creamy Cilantro Sauce for at least 30 minutes while making the remainder of the recipe (for a high speed blender), or soak them overnight or the morning of if you think of it. The longer the better! (You also can make the sauce ahead — see instructions in the cilantro sauce recipe!).",
       "Place the lentils in a pot with 6 cups warm water. Bring to a low boil, then boil for about 15 to 20 minutes until just al dente (taste often to assess doneness). Drain, then stir in the olive oil, cumin, garlic powder, and kosher salt.",
       "Thinly slice the green onions. Thinly slice the cabbage. If using, chop the avocado.",
       "Meanwhile, make the Creamy Cilantro Sauce.",
       "Warm the tortillas according to the package instructions*. (We typically char ours on an open flame, but that’s not the preferred method with the One Degree tortillas.) To serve, top the tortillas with lentils, green onions, green cabbage, salsa verde, torn cilantro leaves, and cilantro drizzle."]}/>,
       <Review restaurant={"The Chum Bucket"} dish={"Fried Chum"} user={"Karen"} rate={"0"} tags={"NOT VEGAN"} review={"This is one of the worst things I've ever put in my computer body."}/>
            ]}/>;
        }
        else if (pageState == 'Notifications') {
            page = <NotificationsPage />;
        }
        else if (pageState == 'Post') {
            page = <Post />;
        }
        else {
            //pageState == Feed
            page = <Feed />;
        }
        return (
            <div>
                <Navigation onComponentChange={this.handleClick} />
                {page}
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'))