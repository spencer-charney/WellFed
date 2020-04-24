import React from 'react';
import { IconContext } from "react-icons";
import { FaComment, FaBook } from 'react-icons/fa';
import { FaBookmark } from 'react-icons/fa';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Comments from './Comments'
import CommentForm from './CommentForm';
import Bookselector from './Bookselector'
import {followUser, isAuthenticated} from '../landingPage/Auth'
import '../../css/feed.css'


class SearchReturnRow extends React.Component {
    constructor(props) {
        super(props);
        this.follow = this.follow.bind(this);
        this.state = {
            following:false
        };
    }

    follow() {
        const auth = isAuthenticated();
        followUser(auth.user._id, this.props.followId, auth.token, auth.user.username).then(
            data => {
                if (data.error) {
                    console.log(data.error);
                    this.setState({following:false})
                }
                else {
                    console.log(data);
                    this.setState({following:true})
                }
            }
        )
    }

    render() {
        let button;
        if(this.state.following){
            button=<Col className="search-return-row-button-clicked">
            <p className="search-return-row-button-name">following</p>
        </Col>
        }
        else {
            button=<Col className="search-return-row-button" onClick={this.follow}>
            <p className="search-return-row-button-name">follow</p>
        </Col>
        }
        return (
            <Container fluid className="search-return-row">
                <Row>
                    <Col>
                        <p className="search-return-row-username">{this.props.username}</p>
                    </Col>
                    {button}
                </Row>
            </Container>
        )
    }
}

export default SearchReturnRow;