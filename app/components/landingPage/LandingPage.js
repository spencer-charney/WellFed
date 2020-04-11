import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Login from './Login';
import Signup from './Signup';
import '../../css/landingPage.css';

class LandingPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            logOrSign: 'log'
        }
        this.handleClickLogin = this.handleClickLogin.bind(this);
        this.handleClickSignUp = this.handleClickSignUp.bind(this);
    }
    handleClickLogin() {
        this.setState({ logOrSign: 'log' });
    }
    handleClickSignUp() {
        this.setState({ logOrSign: 'sign' });
    }

    render() {
        let form;
        if (this.state.logOrSign == 'log') {
            form = <Login sumbit={this.props.sumbit} />
        }
        else {
            form = <Signup sumbit={this.props.sumbit}/>
        }
        return (
            <Container fluid className="landing">
                <Row><Col><p className="landing-title">Welcome to Well Fed!</p></Col></Row>
                <Row><Col /><p className="landing-desc">Welcome to Well Fed. Well Fed is a social media platform designed to connect people with similar dietary restrictions or preferences.</p><Col /></Row>
                <Row>
                    <Col className="landing-col"><Row><p className="landing-col-title">Connect</p></Row><Row><p className="landing-col-desc">Users can follow other users with similar dietary needs as well as explore posts from popular accounts</p></Row></Col>
                    <Col className="landing-col"><Row><p className="landing-col-title">Save</p></Row><Row><p className="landing-col-desc">Users can save the recipes or reviews that they like by bookmarking the posts. Users can also create multiple "Books" on their profiles for other people in their lives with dietary restrictions (children, spouse, etc.) </p></Row></Col>
                    <Col className="landing-col"><Row><p className="landing-col-title">Share</p></Row><Row><p className="landing-col-desc">Users are able to share recipes that they love and which work for their dietary needs. Users are also able to post reviews of meals which fit their dietary needs from restaurants.</p></Row></Col>
                </Row>
                <Row><Col /><Col onClick={this.handleClickLogin} className="landing-log">Login</Col><Col onClick={this.handleClickSignUp} className="landing-sign">Sign Up</Col><Col /></Row>
                <Row><Col /><Col>{form}</Col><Col /></Row>
            </Container>
        )
    }
}

export default LandingPage;