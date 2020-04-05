
import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button } from 'react-bootstrap';

class Book extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }
    //Array of columns
    //Retuirn keyvlaue when clicked
    handleChange(e) {
        this.props.onComponentChange(e);
    }

    render() {
        return (
        <Col onClick={this.handleChange(this.props.index)}>{this.props.name}</Col>      
        )
    }
}


export default Book;