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
        const formState = (this.state.feed == 'recipe') ? <RecipeForm /> : <ReviewForm />;
        return (
            <Container fluid>
                <Row>
                    <Col onClick={this.handleClickRecipe}>Create New Recipe</Col>
                    <Col onClick={this.handleClickReview}>Create New Review</Col>
                </Row>
                <div className="scroll">
                    {formState}
                </div>
            </Container>
        )
    }
}

export default NewPost;