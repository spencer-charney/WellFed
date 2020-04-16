import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import LandingPage from './components/landingPage/LandingPage'
import App from './App'
import './index.css'
import { isAuthenticated, getUser} from "./components/landingPage/Auth";


class Index extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            clicked: false
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event, email, password) {
        this.setState({ clicked: true });
        console.log(event + " " + email + " " + password);
    }
    render() {
        let page;
        if (this.state.clicked || isAuthenticated()) {
            page = <App />;
        }
        else {
            page = <LandingPage submit={this.handleSubmit} />;
        }
        return (
            <div className="index">
                {page}
            </div>
        )

    }
}

ReactDOM.render(<Index />, document.getElementById('app'))
