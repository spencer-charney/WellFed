
import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Recipe from '../feedPage/Recipe'
import Review from '../feedPage/Review'
import Col from 'react-bootstrap/Col';
import {getUser, isAuthenticated} from '../landingPage/Auth'


class BookBottom extends React.Component {
    constructor(props) {
        super(props);
        this.getUsername = this.getUsername.bind(this);
        this.state = {
            user: ''
        }
    }

    getUsername(userId) {
        getUser(userId, isAuthenticated().token).then(data => {
            if (data.error) {
                this.setState({
                    error: data.error
                })
            } 
            else {
                this.setState({ 
                    user: data
                });
            }
        });
    }


    render() {
        let arrayRows = [];
        if (this.props.posts.length == 0) {
            arrayRows = <Container fluid>
                <Row>
                    <Col />
                    <Col className="no-content">
                        <p className="no-content-text">There are no posts in this book yet! You can bookmark posts to this book from your Feed</p>
                    </Col>
                    <Col />
                </Row>
            </Container>
        }
        else {
            var len = this.props.posts.length;
            for (var i = 0; i < len; i++) {
                this.getUsername(this.props.posts[i].postedBy);

                let post;
                if (this.props.posts[i].type == 'recipe') {
                    post = <Recipe self={this.props.self} clickUser={this.props.clickUser} postId={this.props.posts[i]._id} title={this.props.posts[i].title} username={this.state.user.username} author={this.state.user.username} description={this.props.posts[i].description} totalTime={this.props.posts[i].totalTime} serves={this.props.posts[i].serves} tags={this.props.posts[i].tags} ingredients={this.props.posts[i].ingredients} directions={this.props.posts[i].directions} comments={this.props.posts[i].comments} />;

                }
                else {


                    post = <Review self={this.props.self} clickUser={this.props.clickUser} postId={this.props.posts[i]._id} restaurant={this.props.posts[i].restaurant} username={this.state.user.username} dish={this.props.posts[i].dish} user={this.state.user.username} rate={this.props.posts[i].rate} tags={this.props.posts[i].tags} review={this.props.posts[i].review} comments={this.props.posts[i].comments} />;

                    //review
                    // post = <Review restaurant={this.props.posts[i].restaurant} dish={this.props.posts[i].dish} user={this.props.posts[i].user} rate={this.props.posts[i].rate} tags={this.props.posts[i].tags} review={this.props.posts[i].review} comments={this.props.posts[i].comments} />;
    
                }
                arrayRows.push(
                    <Row key={i}>{post}</Row>
                )
            }
        }
        return (

            <Container fluid> {arrayRows}</Container>
        )
    }
}


export default BookBottom;