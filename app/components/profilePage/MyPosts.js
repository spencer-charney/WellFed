import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Recipe from '../feedPage/Recipe'
import Review from '../feedPage/Review'

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
                post = <Recipe title={this.props.myPosts[i].title} author={this.props.myPosts[i].author} description={this.props.myPosts[i].description} totalTime={this.props.myPosts[i].totalTime} serves={this.props.myPosts[i].serves} tags={this.props.myPosts[i].tags} ingredients={this.props.myPosts[i].ingredients} directions={this.props.myPosts[i].directions} comments={this.props.myPosts[i].comments} />;
            }
            else {
                //review
                post = <Review restaurant={this.props.myPosts[i].restaurant} dish={this.props.myPosts[i].dish} user={this.props.myPosts[i].user} rate={this.props.myPosts[i].rate} tags={this.props.myPosts[i].tags} review={this.props.myPosts[i].review} comments={this.props.myPosts[i].comments} />;

            }
            arrayRows.push(
                <Row key={i}>{post}</Row>
            )
        }
        return (
            <Container fluid> {arrayRows}</Container>
        )
    }
}


export default MyPosts;