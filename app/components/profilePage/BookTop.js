
import React from 'react';

import Col from 'react-bootstrap/Col';


class BookTop extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

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