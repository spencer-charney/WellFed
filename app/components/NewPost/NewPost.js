import React from 'react';
import RecipeForm from './RecipeForm';
import ReviewForm from './ReviewForm';
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import '../../css/feed.css'

class NewPost extends React.Component {
    constructor(props) {
        super(props);
        this.handleClickRecipe = this.handleClickRecipe.bind(this);
        this.handleClickReview = this.handleClickReview.bind(this);
        this.state = { feed: 'recipe' }
    }
    handleClickRecipe() {
        this.setState({ feed: 'recipe' })
    }
    handleClickReview() {
        this.setState({ feed: 'review' })
    }
    render() {
        let formState;
        let recipeTab;
        let reviewTab;
        if (this.state.feed == 'recipe') {
            formState = <RecipeForm updatePosts={this.updatePosts}/>;
            recipeTab = <Col onClick={this.handleClickRecipe} className="tab-clicked">Create New Recipe</Col>;
            reviewTab = <Col onClick={this.handleClickReview} className="tab-not-clicked">Create New Review</Col>

        }
        else {
            formState = <ReviewForm updatePosts={this.updatePosts}/>;
            recipeTab = <Col onClick={this.handleClickRecipe} className="tab-not-clicked">Create New Recipe</Col>;
            reviewTab = <Col onClick={this.handleClickReview} className="tab-clicked">Create New Review</Col>

        }
        return (
            <Container fluid>
                <Row>
                    {recipeTab}
                    {reviewTab}
                </Row>
                <div className="scroll">
                    {formState}
                </div>
            </Container>
        )
    }
}

export default NewPost;