import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class AddBook extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChangeName = this.handleChangeName.bind(this);
    }
    handleSubmit(event) {
        console.log(this.state.name);
        event.preventDefault();
    }
    handleChangeName(event) {
        this.setState({ name: event.target.value });
    }
    render() {
        return (
            <Container fluid>
                <Row>Add a New Book</Row>
                <Row>+</Row>
                <Row><form onSubmit={this.handleSubmit}>
                    <Col><input type="text" value={this.state.name} onChange={this.handleChangeName} placeholder="NewName" /></Col>
                    <Col><input type="submit" value="Post" className="btn btn-primary col" /></Col>
                </form></Row>
            </Container>

        )
    }
}

export default AddBook;