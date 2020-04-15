import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

class Comment extends React.Component {
    render() {
        return (
            <Container fluid className="comment">
                <Row><i>{this.props.username}</i></Row>
                <Row><i>{this.props.time}</i></Row>
                <Row>{this.props.comment}</Row>
            </Container>
        )
    }
}

export default Comment;