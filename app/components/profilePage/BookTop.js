
import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button } from 'react-bootstrap';

class BookTop extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }
    //Array of columns
    //Retuirn keyvlaue when clicked
    handleChange() {
        this.props.onComponentChange(this.props.index);
    }

    render() {
        return (
        <Col onClick={this.handleChange}>{this.props.name}</Col>      
        )
    }
}


export default BookTop;