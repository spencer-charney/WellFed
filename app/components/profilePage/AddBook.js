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
                <Row>Add a New Book</Row>:
                <Row><input type="text" value={this.state.name} onChange={this.handleChangeName} placeholder="Name" className="add-search"/></Row>
                <Row onClick={this.handleSubmit} className="add-button"><p className="add-button-string">Add</p></Row>
            </Container>

        )
    }
}

export default AddBook;