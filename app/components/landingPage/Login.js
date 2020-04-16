import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button';
import {signin, authenticate, isAuthenticated} from './Auth'

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            error: ''
        }
        this.handleChangeLogEmail = this.handleChangeLogEmail.bind(this);
        this.handleChangeLogPassword = this.handleChangeLogPassword.bind(this);
        this.handleSubmitLog = this.handleSubmitLog.bind(this);

    }

    handleChangeLogEmail(event) {
        this.setState({ email: event.target.value });
    }
    handleChangeLogPassword(event) {
        this.setState({ password: event.target.value });
    }
    handleSubmitLog() {
        const { email, password } = this.state;
        const user = {
            email,
            password
        };

        signin(user).then(data => {
            if (data.error) {
                this.setState({ error: data.error});
            } else {
                // authenticate
                authenticate(data, () => {
                });
            }
        });
        
        
        //Send to server
        this.props.sumbit("Login", this.state.email, this.state.password);
    }

    render() {
        return (
            <Container fluid className="landing-form">
                <Row><p className="landing-form-title">Log In</p></Row>
                <Row><p className="field">Email:</p><input type="text" value={this.state.email} onChange={this.handleChangeLogEmail} className="textfield" /></Row>
                <Row><p className="field">Password:</p><input type="text" value={this.state.password} onChange={this.handleChangeLogPassword} className="textfield" /></Row>
                <Row ><Col /><p onClick={this.handleSubmitLog} className="submit">log in</p><Col /></Row>
            </Container>
        )
    }
}

export default Login;