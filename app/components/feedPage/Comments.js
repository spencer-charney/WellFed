import React from 'react';
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import { FaTelegramPlane } from 'react-icons/fa';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Comment from './Comment'

class Comments extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChangeComment = this.handleChangeComment.bind(this);
        this.state = {
            commenting: this.props.commenting,
            comment: ""
        };
    }
    handleSubmit(event) {
        //Where you would send message to server
        console.log(event.target.value);
        event.preventDefault();
    }
    handleChangeComment(event) {
        this.setState({ comment: event.target.value });
    }
    render() {
        var commentSpace = [];
        if (this.state.commenting) {
            for (var i = 0; i < this.props.comments.length; i++) {
                commentSpace.push(
                    <Row key={i}>
                        <Comment userName={this.props.comments[i].userName} time={this.props.comments[i].time} comment={this.props.comments[i].comment} />
                    </Row>
                );
            }
        }
        else {
            commentSpace = <Row>{this.props.comments.length} Comments</Row>
        }
        return (
            <Container fluid>
                {commentSpace}
            </Container>
        )
    }
}

export default Comments;