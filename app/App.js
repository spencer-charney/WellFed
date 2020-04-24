import React from 'react';
import './css/app.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Navigation from './components/Navigation'
import Feed from './components/feedPage/Feed'
import MyProfile from './components/profilePage/MyProfile'
import NotificationsPage from './components/notificationsPage/NotificationsPage'
import Container from 'react-bootstrap/Container'
import { followingPosts, list, listByUser } from "./components/NewPost/ApiPost";
import { isAuthenticated, getUser, getUsername} from "./components/landingPage/Auth";
import OtherProfile from './components/profilePage/OtherProfile';


class App extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.updateNotifications = this.updateNotifications.bind(this);
        this.updateUser = this.updateUser.bind(this);
        this.updatePosts = this.updatePosts.bind(this);
        this.clickUser = this.clickUser.bind(this);
        this.state = {
            pageState: 'feed',
            error: null,
            isLoaded: false,
            myPosts: [],
            myFeedPosts: [],
            discoverPosts: [],
            myBooks: '',
            self: '',
            notifications: [],
            otherUser: '',
            otherPosts: []
        }
    }

    componentDidMount() {
        setTimeout(() => {
            const auth = isAuthenticated();
            const user = auth.user;
            const token = auth.token;

            list().then(data => {
                if (data.error) {
                    this.setState({
                        isLoaded: false,
                        error
                    });
                    console.log(data.error)

                } else {
                    this.setState({
                        isLoaded: true,
                        discoverPosts: data.posts
                    });

                }
            });
            
            listByUser(user._id, token).then(data => {
                if (data.error) {
                    this.setState({ 
                        error: data.error,
                        isLoaded: false
                    });
                    console.log(data.error)
                }
                else{
                this.setState({ 
                    myPosts: data,
                    isLoaded: true
                });

            }});

            this.updateUser(user._id, token);

            // followingPosts(auth.user._id, auth.token).then(data => {
            //     if (data.error) {
            //         this.setState({
            //             error: data.error
            //         })
            //         console.log(data.error);

            //     } else {
            //         this.setState({ 
            //             myFeedPosts: data
            //         });
            //     }
            // });
            
        }, 500);
        
    }

    updatePosts() {
        const auth = isAuthenticated();
        list().then(data => {
            if (data.error) {
                this.setState({
                    error
                });
                console.log(data.error);

            } else {
                this.setState({
                    discoverPosts: data.posts
                });
            }
        });

        listByUser(auth.user._id, auth.token).then(data => {
            if (data.error) {
                this.setState({ 
                    error: data.error
                });
                console.log(data.error);

            }
            else{
            this.setState({ 
                myPosts: data
            });

        }});

    
        followingPosts(auth.user._id, auth.token).then(data => {
            if (data.error) {
                this.setState({
                    error: data.error
                })
                console.log(data.error);

            } else {
                this.setState({ 
                    myFeedPosts: data
                });

            }
        });
        
    }

    updateUser(userId, token) {
        getUser(userId, token).then(data => {
            if (data.error) {
                this.setState({
                    error: data.error
                })
            } 
            else {
                this.setState({ 
                    self: data
                });
            }
        });
    }

    updateNotifications(notifications) {
        notifications.reverse()
        this.setState({notifications});
    }


    handleClick(newPageState) {
        this.updatePosts();
        const auth = isAuthenticated();
        this.updateUser(auth.user._id, auth.token);
        this.updateNotifications(this.state.self.notifications);
        this.setState({ pageState: newPageState })
    }
    clickUser(username){
        const token = isAuthenticated().token;
        getUsername(username, token).then(data => {
            if (data.error) {
                this.setState({
                    error: data.error
                })
            }
            else {
                listByUser(data._id, token).then(posts => {
                    if (posts.error) {
                        this.setState({
                            error: posts.error
                        })
                    }
                    else {
                        this.setState({
                            otherUser: data,
                            otherPosts: posts,
                            pageState:'clickUser'
                        })
                    }
                })
                
            }
        })

        
    }
    render() {
        const { self, error, isLoaded, myPosts, discoverPosts, myFeedPosts, notifications, otherUser, otherPosts } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            let followersLength, followingLength = 0;
            if (self.followers) followersLength = self.followers.length;
            if (self.following) followingLength = self.following.length;

            let otherFollowersLength, otherFollowingLength = 0;
            if (otherUser.followers) otherFollowersLength = otherUser.followers.length;
            if (otherUser.following) otherFollowingLength = otherUser.following.length;

            const pageState = this.state.pageState;
            let page;
            if (pageState == 'profile') {
                page = <MyProfile clickUser={this.clickUser} updatePosts={this.updatePosts} updateUser={this.updateUser} self={self} name={self.name} username={self.username} followers={followersLength} following={followingLength} restrictions={self.restrictions} 
                myBooks={self.myBooks}
                myPosts={myPosts}
                />;
            }
            else if (pageState == 'notifications') {
                page = <NotificationsPage notifications={notifications}
                // {[
                // { type: "newBookmark", username: "user2", time: "16:20:00", message: "This is the title of the post" },
                // ]} 
                />;
            }
            else if(pageState == 'clickUser'){
                
                page = <OtherProfile updatePosts={this.updatePosts} updateUser={this.updateUser} clickUser={this.clickUser} self={self} otherUser={otherUser} name={otherUser.name} username={otherUser.username} followers={otherFollowersLength} following={otherFollowingLength} restrictions={otherUser.restrictions} 
                myPosts={otherPosts}
                />
            }
            else {
                //pageState == feed
                page = <Feed clickUser={this.clickUser} updatePosts={this.updatePosts} self={self}
                    myFeedPosts= {myFeedPosts} discoverPosts={discoverPosts}
                    />;
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