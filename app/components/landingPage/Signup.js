import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import {signup} from './Auth'

class Signup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            username: '',
            diet: '',
            email: '',
            password:'',
            error: ''
        }
        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangeUsername= this.handleChangeUsername.bind(this);
        this.handleChangeDiet = this.handleChangeDiet.bind(this);
        this.handleChangeEmail= this.handleChangeEmail.bind(this);
        this.handleChangePassword = this.handleChangePassword.bind(this);
        this.handleSubmitSign = this.handleSubmitSign.bind(this);

    }

    handleChangeName(event) {
        this.setState({ name: event.target.value });
    }
    handleChangeUsername(event) {
        this.setState({ username: event.target.value });
    }
    handleChangeDiet(event) {
        this.setState({ diet: event.target.value });
    }
    handleChangeEmail(event) {
        this.setState({ email: event.target.value });
    }
    handleChangePassword(event) {
        this.setState({ password: event.target.value });
    }
    handleSubmitSign() {
        const { name, username, diet, email, password } = this.state;
        const user = {
            name,
            username,
            diet,
            email,
            password
        };

        signup(user).then(data => {
            if (data.error) this.setState({ error: data.error });
            // else {
            //     this.setState({
            //         name: '',
            //         username: '',
            //         diet: '',
            //         email: '',
            //         password:'',
            //         error: ''
            //     });
            // }
        });

        if (this.state.error.length == 0) {
            console.log(this.state.error);
        }
        //Send to server
        this.props.sumbit("Sign Up", this.state.email, this.state.password);

    }

    render() {
        return (
            <Container fluid className="landing-form">
                <Row><p className="landing-form-title">Sign Up</p></Row>
                <Row><p className="field">Name:</p><input type="text" value={this.state.name} onChange={this.handleChangeName} className="textfield" /></Row>
                <Row><p className="field">Username:</p><input type="text" value={this.state.username} onChange={this.handleChangeUsername} className="textfield" /></Row>
                <Row><p className="field">Dietary Restrictions:</p><input type="text" value={this.state.diet} onChange={this.handleChangeDiet} className="textfield" placeholder="Please separate values with a comma (eg. Vegan, Gluten Free, etc.)"/></Row>
                <Row><p className="field">Email:</p><input type="text" value={this.state.email} onChange={this.handleChangeEmail} className="textfield" /></Row>
                <Row><p className="field">Password:</p><input type="text" value={this.state.password} onChange={this.handleChangePassword} className="textfield" /></Row>
                <Row><Col /><p onClick={this.handleSubmitSign} className="submit">sign up</p><Col /></Row>
            </Container>
        )
    }
}

export default Signup;