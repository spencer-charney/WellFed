import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button';
import {signin} from './Auth'

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            logEmail: '',
            logPassword: ''
        }
        this.handleChangeLogEmail = this.handleChangeLogEmail.bind(this);
        this.handleChangeLogPassword = this.handleChangeLogPassword.bind(this);
        this.handleSubmitLog = this.handleSubmitLog.bind(this);

    }

    handleChangeLogEmail(event) {
        this.setState({ logEmail: event.target.value });
    }
    handleChangeLogPassword(event) {
        this.setState({ logPassword: event.target.value });
    }
    handleSubmitLog() {
        
        //Send to server
        this.props.sumbit("Login", this.state.logEmail, this.state.logPassword);
    }

    render() {
        return (
            <Container fluid className="landing-form">
                <Row><p className="landing-form-title">Log In</p></Row>
                <Row><p className="field">Email:</p><input type="text" value={this.state.logEmail} onChange={this.handleChangeLogEmail} className="textfield" /></Row>
                <Row><p className="field">Password:</p><input type="text" value={this.state.logPassword} onChange={this.handleChangeLogPassword} className="textfield" /></Row>
                <Row ><Col /><p onClick={this.handleSubmitLog} className="submit">log in</p><Col /></Row>
            </Container>
        )
    }
}

export default Login;