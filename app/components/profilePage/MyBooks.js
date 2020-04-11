import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import BookTop from './BookTop'
import BookBottom from './BookBottom'
import AddBook from './AddBook';

class MyBooks extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            book: 0

        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(i) {
        this.setState({ book: i })
    }

    render() {
        var arrayOfTop = [];
        var arrayOfBottom = [];
        var len = this.props.myBooks.length;
        var number = this.state.book;
        for (var i = 0; i < len; i++) {
            arrayOfTop.push(
                <BookTop key={i} onComponentChange={this.handleClick} index={i} name={this.props.myBooks[i].name}></BookTop>
            );
            arrayOfBottom.push(
                <BookBottom key={i} posts={this.props.myBooks[i].posts}></BookBottom>
            );
        }
        return (
            <Container fluid>
                <Row>
                    <Col><AddBook /></Col>
                    <Col>{arrayOfTop}</Col>
                </Row>
                <Container fluid>
                    <Row><h4>{arrayOfTop[number]}</h4></Row>
                    {
                        arrayOfBottom[number]
                    }
                </Container>
            </Container>
        )

    }
}

export default MyBooks;