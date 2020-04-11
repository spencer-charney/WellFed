import React from 'react';
import './css/app.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Navigation from './components/Navigation'
import Feed from './components/feedPage/Feed'
import MyProfile from './components/profilePage/MyProfile'
import NotificationsPage from './components/notificationsPage/NotificationsPage'
import Container from 'react-bootstrap/Container'
import { list } from "./components/NewPost/apiPost";


class App extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            pageState: 'feed',
            error: null,
            isLoaded: false,
            posts: []
        }
    }

    componentDidMount() {
        list().then(data => {
            if (data.error) {
                this.setState({
                    isLoaded: true,
                    error
                });
            } else {
                this.setState({
                    isLoaded: true,
                    posts: data
                });
            }
        });
    }


    handleClick(newPageState) {
        this.setState({ pageState: newPageState })
    }
    render() {
        const { error, isLoaded, items } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            console.log(this.state.posts);
            const pageState = this.state.pageState;
            let page;
            if (pageState == 'profile') {
                page = <MyProfile name="Brian Greeley" username="420PAWGlover" followers="69" following="96" restrictions="Four Lokos, dry pussy" myBooks={[{
                    name: "Kid1", posts: [
                        { type: "review", restaurant: "Krusty Krab", dish: "Pretty Patty", user: "Plankton", rate: "5", tags: "Vegan", review: "This is the most beautiful and tasty veggie patty I've ever had. I wish I had the recipe >:D", comments: [{ userName: "Spencer Charney", time: "16:20:00", comment: "L O L" }, { userName: "Karen Charney", time: "16:20:00", comment: "OMG" }] },
                        { type: "recipe", title: "Easy Vegan Tacos", author: "Sonja and Ryan", description: "Looking for easy vegan tacos? These “verde” vegan tacos are color-themed, featuring green lentils, green cabbage, and a bright green cilantro sauce.", totalTime: "30 minutes", serves: "4", tags: "Vegan,  Gluten Free", ingredients: "1 1/2 cups green lentils \r 2 tablespoons olive oil \r 1 teaspoon cumin\r 1 teaspoon garlic powder\r 3/4 teaspoon kosher salt \r Fresh ground pepper \r 8 One Degree sprouted organic corn tortillas \r 2 green onions\r1/2 small green cabbage\rSalsa verde (purchased or homemade) \r Creamy Cilantro Sauce, to serve\r Avocado or pickled jalapenos, optional", directions: "1. Soak the cashews for the Creamy Cilantro Sauce for at least 30 minutes while making the remainder of the recipe (for a high speed blender), or soak them overnight or the morning of if you think of it. The longer the better! (You also can make the sauce ahead — see instructions in the cilantro sauce recipe!). \r 2. Place the lentils in a pot with 6 cups warm water. Bring to a low boil, then boil for about 15 to 20 minutes until just al dente (taste often to assess doneness). Drain, then stir in the olive oil, cumin, garlic powder, and kosher salt. \r3. Thinly slice the green onions. Thinly slice the cabbage. If using, chop the avocado. \r4. Meanwhile, make the Creamy Cilantro Sauce.\r 5. Warm the tortillas according to the package instructions*. (We typically char ours on an open flame, but that’s not the preferred method with the One Degree tortillas.) To serve, top the tortillas with lentils, green onions, green cabbage, salsa verde, torn cilantro leaves, and cilantro drizzle.", comments: [{ userName: "Spencer Charney", time: "16:20:00", comment: "L O L" }, { userName: "Karen Charney", time: "16:20:00", comment: "OMG" }] }
                    ]
                }, {
                    name: "Kids2", posts: [
                        { type: "recipe", title: "Easy Vegan Tacos", author: "Sonja and Ryan", description: "Looking for easy vegan tacos? These “verde” vegan tacos are color-themed, featuring green lentils, green cabbage, and a bright green cilantro sauce.", totalTime: "30 minutes", serves: "4", tags: "Vegan,  Gluten Free", ingredients: "1 1/2 cups green lentils \r 2 tablespoons olive oil \r 1 teaspoon cumin\r 1 teaspoon garlic powder\r 3/4 teaspoon kosher salt \r Fresh ground pepper \r 8 One Degree sprouted organic corn tortillas \r 2 green onions\r1/2 small green cabbage\rSalsa verde (purchased or homemade) \r Creamy Cilantro Sauce, to serve\r Avocado or pickled jalapenos, optional", directions: "1. Soak the cashews for the Creamy Cilantro Sauce for at least 30 minutes while making the remainder of the recipe (for a high speed blender), or soak them overnight or the morning of if you think of it. The longer the better! (You also can make the sauce ahead — see instructions in the cilantro sauce recipe!). \r 2. Place the lentils in a pot with 6 cups warm water. Bring to a low boil, then boil for about 15 to 20 minutes until just al dente (taste often to assess doneness). Drain, then stir in the olive oil, cumin, garlic powder, and kosher salt. \r3. Thinly slice the green onions. Thinly slice the cabbage. If using, chop the avocado. \r4. Meanwhile, make the Creamy Cilantro Sauce.\r 5. Warm the tortillas according to the package instructions*. (We typically char ours on an open flame, but that’s not the preferred method with the One Degree tortillas.) To serve, top the tortillas with lentils, green onions, green cabbage, salsa verde, torn cilantro leaves, and cilantro drizzle.", comments: [] },
                        { type: "review", restaurant: "Krusty Krab", dish: "Pretty Patty", user: "Plankton", rate: "5", tags: "Vegan", review: "This is the most beautiful and tasty veggie patty I've ever had. I wish I had the recipe >:D", comments: [] }
                    ]
                }]}
                    myPosts={[
                        { type: "recipe", title: "Easy Vegan Tacos", author: "Sonja and Ryan", description: "Looking for easy vegan tacos? These “verde” vegan tacos are color-themed, featuring green lentils, green cabbage, and a bright green cilantro sauce.", totalTime: "30 minutes", serves: "4", tags: "Vegan,  Gluten Free", ingredients: "1 1/2 cups green lentils \r 2 tablespoons olive oil \r 1 teaspoon cumin\r 1 teaspoon garlic powder\r 3/4 teaspoon kosher salt \r Fresh ground pepper \r 8 One Degree sprouted organic corn tortillas \r 2 green onions\r1/2 small green cabbage\rSalsa verde (purchased or homemade) \r Creamy Cilantro Sauce, to serve\r Avocado or pickled jalapenos, optional", directions: "1. Soak the cashews for the Creamy Cilantro Sauce for at least 30 minutes while making the remainder of the recipe (for a high speed blender), or soak them overnight or the morning of if you think of it. The longer the better! (You also can make the sauce ahead — see instructions in the cilantro sauce recipe!). \r 2. Place the lentils in a pot with 6 cups warm water. Bring to a low boil, then boil for about 15 to 20 minutes until just al dente (taste often to assess doneness). Drain, then stir in the olive oil, cumin, garlic powder, and kosher salt. \r3. Thinly slice the green onions. Thinly slice the cabbage. If using, chop the avocado. \r4. Meanwhile, make the Creamy Cilantro Sauce.\r 5. Warm the tortillas according to the package instructions*. (We typically char ours on an open flame, but that’s not the preferred method with the One Degree tortillas.) To serve, top the tortillas with lentils, green onions, green cabbage, salsa verde, torn cilantro leaves, and cilantro drizzle.", comments: [] },
                        { type: "review", restaurant: "Krusty Krab", dish: "Pretty Patty", user: "Plankton", rate: "5", tags: "Vegan", review: "This is the most beautiful and tasty veggie patty I've ever had. I wish I had the recipe >:D", comments: [] }
                    ]} />;
            }
            else if (pageState == 'notifications') {
                page = <NotificationsPage notifications={[
                    { type: "newComment", username: "user1", time: "16:20:00", message: "Looks Great!" },
                    { type: "newBookmark", username: "user2", time: "16:20:00", message: "This is the title of the post" },
                    { type: "newFollow", username: "user3", time: "16:20:00", message: "" },
                    { type: "newFollow", username: "user1", time: "16:20:00", message: "" },
                    { type: "newFollow", username: "user1", time: "16:20:00", message: "" }
                ]} />;
            }
            else {

                //pageState == feed
                page = <Feed
                    myFeedPosts={[
                        { type: "review", restaurant: "Krusty Krab", dish: "Pretty Patty", user: "Plankton", rate: "5", tags: "Vegan", review: "This is the most beautiful and tasty veggie patty I've ever had. I wish I had the recipe >:D", comments: [{ userName: "Spencer Charney", time: "16:20:00", comment: "L O L" }, { userName: "Karen Charney", time: "16:20:00", comment: "OMG" }] },
                        {
                            type: "recipe", title: "Easy Vegan Tacos", author: "Sonja and Ryan", description: "Looking for easy vegan tacos? These “verde” vegan tacos are color-themed, featuring green lentils, green cabbage, and a bright green cilantro sauce.", totalTime: "30 minutes", serves: "4", tags: "Vegan,  Gluten Free", ingredients: "1 1/2 cups green lentils \r 2 tablespoons olive oil \r 1 teaspoon cumin\r 1 teaspoon garlic powder\r 3/4 teaspoon kosher salt \r Fresh ground pepper \r 8 One Degree sprouted organic corn tortillas \r 2 green onions\r1/2 small green cabbage\rSalsa verde (purchased or homemade) \r Creamy Cilantro Sauce, to serve\r Avocado or pickled jalapenos, optional", directions: "1. Soak the cashews for the Creamy Cilantro Sauce for at least 30 minutes while making the remainder of the recipe (for a high speed blender), or soak them overnight or the morning of if you think of it. The longer the better! (You also can make the sauce ahead — see instructions in the cilantro sauce recipe!). \r 2. Place the lentils in a pot with 6 cups warm water. Bring to a low boil, then boil for about 15 to 20 minutes until just al dente (taste often to assess doneness). Drain, then stir in the olive oil, cumin, garlic powder, and kosher salt. \r3. Thinly slice the green onions. Thinly slice the cabbage. If using, chop the avocado. \r4. Meanwhile, make the Creamy Cilantro Sauce.\r 5. Warm the tortillas according to the package instructions*. (We typically char ours on an open flame, but that’s not the preferred method with the One Degree tortillas.) To serve, top the tortillas with lentils, green onions, green cabbage, salsa verde, torn cilantro leaves, and cilantro drizzle.", comments: [{ userName: "Spencer Charney", time: "16:20:00", comment: "L O L" }, { userName: "Karen Charney", time: "16:20:00", comment: "OMG" }
                            ]
                        }]}
                    discoverPosts={[
                        { type: "recipe", title: "Easy Vegan Tacos", author: "Sonja and Ryan", description: "Looking for easy vegan tacos? These “verde” vegan tacos are color-themed, featuring green lentils, green cabbage, and a bright green cilantro sauce.", totalTime: "30 minutes", serves: "4", tags: "Vegan,  Gluten Free", ingredients: "1 1/2 cups green lentils \r 2 tablespoons olive oil \r 1 teaspoon cumin\r 1 teaspoon garlic powder\r 3/4 teaspoon kosher salt \r Fresh ground pepper \r 8 One Degree sprouted organic corn tortillas \r 2 green onions\r1/2 small green cabbage\rSalsa verde (purchased or homemade) \r Creamy Cilantro Sauce, to serve\r Avocado or pickled jalapenos, optional", directions: "1. Soak the cashews for the Creamy Cilantro Sauce for at least 30 minutes while making the remainder of the recipe (for a high speed blender), or soak them overnight or the morning of if you think of it. The longer the better! (You also can make the sauce ahead — see instructions in the cilantro sauce recipe!). \r 2. Place the lentils in a pot with 6 cups warm water. Bring to a low boil, then boil for about 15 to 20 minutes until just al dente (taste often to assess doneness). Drain, then stir in the olive oil, cumin, garlic powder, and kosher salt. \r3. Thinly slice the green onions. Thinly slice the cabbage. If using, chop the avocado. \r4. Meanwhile, make the Creamy Cilantro Sauce.\r 5. Warm the tortillas according to the package instructions*. (We typically char ours on an open flame, but that’s not the preferred method with the One Degree tortillas.) To serve, top the tortillas with lentils, green onions, green cabbage, salsa verde, torn cilantro leaves, and cilantro drizzle.", comments: [] },
                        { type: "review", restaurant: "Krusty Krab", dish: "Pretty Patty", user: "Plankton", rate: "5", tags: "Vegan", review: "This is the most beautiful and tasty veggie patty I've ever had. I wish I had the recipe >:D", comments: [] }
                    ]} />;
            }
            return (
                <Container fluid>
                    <Navigation onComponentChange={this.handleClick} />
                    <Container fluid className="page">
                        {page}
                    </Container>
                </Container>
            )
        }
    }
}

export default App;