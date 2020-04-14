import React from 'react';
import { FaTelegramPlane } from 'react-icons/fa';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import { IconContext } from "react-icons";


class CommentForm extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChangeComment = this.handleChangeComment.bind(this);
        this.state = {
            comment: ""
        };
    }
    handleSubmit() {
        //Where you would send message to server
        console.log(this.state.comment);
    }
    handleChangeComment(event) {
        this.setState({ comment: event.target.value });
    }
    render() {
        return (
            <Container fluid className="comment-area">
                <Row>
                    Comment:
                    </Row>
                <Row><textarea value={this.state.comment} onChange={this.handleChangeComment} rows="3" className="comment-textarea" placeholder="Your comment here" /></Row>
                <Row onClick={this.handleSubmit} className="comment-submit"><p className="comment-submit-text">comment</p>
                </Row>
            </Container>
        )
    }
}

export default CommentForm;