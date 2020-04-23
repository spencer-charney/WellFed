import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown'
import { isAuthenticated } from '../landingPage/Auth';

class BookForSelector extends React.Component {
    constructor(props) {
        super(props);
        this.handleSelect = this.handleSelect.bind(this);
    }
    handleSelect(){
        const auth = isAuthenticated();
        this.props.dropdownSelected(this.props.name);
        this.props.addToBook(auth.user._id, this.props.book, auth.token, this.props.postId);
    }
    render() {
        return (
            <Dropdown.Item  onClick={this.handleSelect}>{this.props.name}</Dropdown.Item>
        )
    }
}

export default BookForSelector;