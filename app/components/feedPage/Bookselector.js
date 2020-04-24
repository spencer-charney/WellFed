import React from 'react';
import DropdownButton from 'react-bootstrap/DropdownButton';
import  BookForSelector from './BookForSelector'

class Bookselector extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dropdownSelected : 'Select Book:'
        }
        this.dropdownSelected = this.dropdownSelected.bind(this);
    }
    dropdownSelected(dropdownName){
        this.setState({dropdownSelected : dropdownName});
    }
    render() {
        const len = this.props.myBooks.length;
        let items = [];
        for(var i = 0; i < len; i++){
            items.push(
                <BookForSelector key={i} postTitle={this.props.postTitle} name={this.props.myBooks[i].name} addToBook={this.props.addToBook} postId={this.props.postId} book={this.props.myBooks[i]} dropdownSelected={this.dropdownSelected}/>
            );
        }
        return (
            <DropdownButton title={this.state.dropdownSelected}>
                {items}
            </DropdownButton>
        )
    }
}

export default Bookselector;