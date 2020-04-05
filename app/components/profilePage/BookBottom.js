
import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button } from 'react-bootstrap';

class Book extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        var len = this.props.posts.length;
        let arrayRows = [];
        for (var i = 0; i < len; i++) {
            arrayRows.push(
                <Row>{this.props.posts[i]}</Row>
            )
        }
        return (


            <Container fluid> {arrayRows}</Container>
        )
    }
}


export default Book;