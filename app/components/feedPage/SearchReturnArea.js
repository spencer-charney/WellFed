import React from 'react';
import { IconContext } from "react-icons";
import { FaChevronUp, FaBook } from 'react-icons/fa';
import { FaBookmark } from 'react-icons/fa';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Comments from './Comments'
import CommentForm from './CommentForm';
import Bookselector from './Bookselector'
import SearchReturnRow from './SearchReturnRow'
import '../../css/feed.css'


class SearchReturnArea extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        console.log(this.props.resultArray);
        let searchList = [];
        if (this.props.resultArray) {
            for (let i = 0; i < this.props.resultArray.length; i++) {
                let user = this.props.resultArray[i];
                searchList.push(<SearchReturnRow key={i} username={user.username} followId={user._id}/>)
            }
        }
        return (
            <Row className="search-return-container">
                <Col />
                <Col xs={3}>
                    <Container fluid className="search-return-area">
                        {searchList}
                    </Container>
                    <Row>
                        <Col />
                        <Col className="search-chevron-row" onClick={this.props.collapseClicked}>
                            <Row>
                                <Col><FaChevronUp /></Col>
                                <Col><p className="search-chevron-row-label">Collapse</p></Col>
                            </Row>
                        </Col>
                        <Col />
                    </Row>
                </Col>
            </Row>
        )
    }
}

export default SearchReturnArea;