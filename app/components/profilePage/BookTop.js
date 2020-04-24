
import React from 'react';

import Col from 'react-bootstrap/Col';
import '../../css/profile.css'



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
        <Col onClick={this.handleChange} className="book-col-top"><p className="book-title">{this.props.name}</p></Col>      
        )
    }
}


export default BookTop;