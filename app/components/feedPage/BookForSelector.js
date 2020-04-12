import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown'

class BookForSelector extends React.Component {
    constructor(props) {
        super(props);
        this.handleSelect = this.handleSelect.bind(this);
    }
    handleSelect(){
        this.props.dropdownSelected(this.props.name);
    }
    render() {
        return (
            <Dropdown.Item  onClick={this.handleSelect}>{this.props.name}</Dropdown.Item>
        )
    }
}

export default BookForSelector;