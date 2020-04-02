import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

class Comment extends React.Component {
    render() {
        return (
            <Container fluid>
                <Row><i>{this.props.userName}</i></Row>
                <Row>{this.props.comment}</Row>
                <Row><i>{this.props.time}</i></Row>
            </Container>
        )
    }
}

export default Comment;