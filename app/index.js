import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Navigation from './components/Navigation'
import Feed from './components/feedPage/Feed'
import MyProfile from './components/profilePage/MyProfile'
import NotificationsPage from './components/notificationsPage/NotificationsPage'
import Post from './components/NewPost/NewPost'

class App extends React.Component{
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = {pageState: 'MyFeed'}
    }
    handleClick(newPageState){
        this.setState({pageState: newPageState})
    }
    render(){
        const pageState = this.state.pageState;
        let page;
        if(pageState=='MyProfile'){
            page = <MyProfile />;
        }
        else  if(pageState=='Notifications'){
            page = <NotificationsPage />;
        }
        else  if(pageState=='Post'){
            page = <Post />;
        }
        else {
            //pageState == Feed
            page = <Feed />;
        }
        return(
            <div>
                <Navigation onComponentChange={this.handleClick}/>
                {page}
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'))