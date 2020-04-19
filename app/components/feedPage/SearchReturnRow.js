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

import '../../css/feed.css'


class SearchReturnRow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {

        return (
            <Container fluid className="search-return-row">
                <Row>
                    <Col>
                        <p className="search-return-row-username">{this.props.username}</p>
                    </Col>
                    <Col className="search-return-row-button">
                        <p className="search-return-row-button-name">follow</p>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default SearchReturnRow;