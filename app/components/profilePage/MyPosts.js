import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Recipe from '../feedPage/Recipe'
import Review from '../feedPage/Review'
import Col from 'react-bootstrap/Col';


class MyPosts extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        var len = this.props.myPosts.length;
        let arrayRows = [];
        for (var i = 0; i < len; i++) {
            let post;
            if (this.props.myPosts[i].type == 'recipe') {
                post = <Recipe clickUser={this.props.clickUser} username={this.props.myPosts[i].postedBy.username} self={this.props.self} postId={this.props.myPosts[i]._id} title={this.props.myPosts[i].title} author={this.props.myPosts[i].postedBy.username} description={this.props.myPosts[i].description} totalTime={this.props.myPosts[i].totalTime} serves={this.props.myPosts[i].serves} tags={this.props.myPosts[i].tags} ingredients={this.props.myPosts[i].ingredients} directions={this.props.myPosts[i].directions} comments={this.props.myPosts[i].comments} />;
            }
            else {
                //review
                post = <Review clickUser={this.props.clickUser} username={this.props.myPosts[i].postedBy.username} self={this.props.self} postId={this.props.myPosts[i]._id} restaurant={this.props.myPosts[i].restaurant} dish={this.props.myPosts[i].dish} user={this.props.myPosts[i].postedBy.username} rate={this.props.myPosts[i].rate} tags={this.props.myPosts[i].tags} review={this.props.myPosts[i].review} comments={this.props.myPosts[i].comments} />;

            }
            arrayRows.push(
                <Row key={i}>{post}</Row>
            )
        }
        if (len == 0) {
            arrayRows = <Container fluid>
                <Row>
                    <Col />
                    <Col className="no-content">
                        <p className="no-content-text">You have no Posts yet. This is where your posts will show up</p>
                    </Col>
                    <Col />
                </Row>
            </Container>
        }
        return (
            <Container fluid> {arrayRows}</Container>
        )
    }
}


export default MyPosts;