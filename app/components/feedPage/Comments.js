import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Comment from './Comment'
import { isAuthenticated, getUser} from "../landingPage/Auth";
var moment = require('moment');

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
                        <Comment username={this.props.comments[i].username} time={moment(this.props.comments[i].time).format('MM/DD/YYYY, HH:MM A')} comment={this.props.comments[i].comment} />
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