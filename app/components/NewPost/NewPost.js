import React from 'react';
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import RecipeForm from './RecipeForm';
import ReviewForm from './ReviewForm';

class NewPost extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = { feed: 'recipe' }
    }
    handleClick(e) {
        this.setState({ feed: e.target.value })
    }
    render() {
        const formState = (this.state.feed == 'recipe') ? <RecipeForm /> : <ReviewForm />;
        return (
            <center>
                <h1>Create New Post</h1>
                <ButtonGroup>
                    <button className="btn btn-default" value="recipe" onClick={this.handleClick}>Create New Recipe</button>
                    <button className="btn btn-default" value="review" onClick={this.handleClick}>Create New Review</button>
                </ButtonGroup>
                {formState}
            </center>
        )
    }
}

export default NewPost;