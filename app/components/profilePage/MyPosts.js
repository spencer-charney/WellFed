import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button } from 'react-bootstrap';

class MyPosts extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        var len = this.props.myPosts.length;
        let arrayRows = [];
        for (var i = 0; i < len; i++) {
            arrayRows.push(
                <Row key={i}>{this.props.myPosts[i]}</Row>
            )
        }
        return (
            <Container fluid> {arrayRows}</Container>
        )
    }
}


export default MyPosts;