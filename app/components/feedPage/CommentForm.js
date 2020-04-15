import React from 'react';
import { FaTelegramPlane } from 'react-icons/fa';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import { IconContext } from "react-icons";
import { isAuthenticated } from '../landingPage/Auth';
import { newComment } from '../NewPost/apiPost';

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
        const token = isAuthenticated().token;
        const postId = this.props.postId;
        const self = this.props.self;
        const com = {
            comment: this.state.comment,
            username: self.username
        }

        newComment(self._id, token, postId, com).then(
            data => {
                if (data.error) {
                    console.log(data.error);
                } else {
                    this.setState({ comment: "" });
                    // dispatch fresh list of coments to parent
                    this.props.updateComments(data.comments);
                }
            }
        );
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