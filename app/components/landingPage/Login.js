import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            logEmail = '',
            logPassword = ''
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
        console.log(this.state.logEmail)
        console.log(this.state.logPassword)
    }

    render() {
        return (
            <Container fluid>
                <Row><Col>Email:</Col><Col><input type="text" value={this.state.logEmail} onChange={this.handleChangeLogEmail} /></Col></Row>
                <Row><Col>Password:</Col><Col><input type="text" value={this.state.logPassword} onChange={this.handleChangeLogPassword} /></Col></Row>
                <Row><Button onClick={this.handleSubmitLog}>submit</Button></Row>
            </Container>
        )
    }
}

export default Login;