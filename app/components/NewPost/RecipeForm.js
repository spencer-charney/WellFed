import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'
import '../../css/feed.css'
import { createPost } from "./apiPost";
import { isAuthenticated } from "../landingPage/Auth";

class RecipeForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            description: '',
            totalTime: '',
            serves: '',
            tags: '',
            ingredients: '',
            directions: '',
            error: '',
            post: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChangeTitle = this.handleChangeTitle.bind(this);
        this.handleChangeDescription = this.handleChangeDescription.bind(this);
        this.handleChangeTotalTime = this.handleChangeTotalTime.bind(this);
        this.handleChangeServes = this.handleChangeServes.bind(this);
        this.handleChangeTags = this.handleChangeTags.bind(this);
        this.handleChangeIngredients = this.handleChangeIngredients.bind(this);
        this.handleChangeDirections = this.handleChangeDirections.bind(this);
    }

    handleSubmit(event) {
        const { title, description, totalTime, serves, tags, ingredients, directions } = this.state;
        const type = "recipe";
        const ing2 = ingredients.split("\n").join("<br>");
        const dir = directions.split("\n").join("<br>");
        const recipe = {
            title,
            description,
            totalTime,
            serves,
            tags,
            ingredients: ing2,
            directions: dir,
            type
        };

        const auth = isAuthenticated();

        const userId = auth.user._id;
        const token = auth.token;

        createPost(userId, token, recipe).then(data => {
            if (data.error) {
                this.setState({ error: data.error });
                console.log(data.error)
            } else {
                this.setState({
                    post: data,
                });
                this.props.updatePosts();
            }
        });
    }

    handleChangeTitle(event) {
        this.setState({ title: event.target.value });
    }

    handleChangeDescription(event) {
        this.setState({ description: event.target.value });
    }

    handleChangeTotalTime(event) {
        this.setState({ totalTime: event.target.value });

    }

    handleChangeServes(event) {
        this.setState({ serves: event.target.value });

    }

    handleChangeTags(event) {
        this.setState({ tags: event.target.value });
    }

    handleChangeIngredients(event) {
        this.setState({ ingredients: event.target.value });

    }

    handleChangeDirections(event) {
        this.setState({ directions: event.target.value });

    }

    render() {
        return (
            <Container fluid>
                <Row><h3>New Recipe</h3></Row>
                <Container fluid>
                    <Row>Title:</Row>
                    <Row><input type="text" value={this.state.title} onChange={this.handleChangeTitle} className="form-control" placeholder="Title of Recipe" /></Row>
                    <Row>Description:</Row>
                    <Row><textarea value={this.state.description} onChange={this.handleChangeDescription} className="form-control" placeholder="Please describe your dish" /></Row>

                    <Row>Total Time:</Row>
                    <Row><input type="text" value={this.state.totalTime} onChange={this.handleChangeTotalTime} className="form-control" placeholder="Please specify unit of time (minutes or hours)" /></Row>
                    <Row>Serves:</Row>
                    <Row><input type="text" value={this.state.serves} onChange={this.handleChangeServes} className="form-control" placeholder="Servings" /></Row>

                    <Row>Tags:</Row>
                    <Row><input type="text" value={this.state.tags} onChange={this.handleChangeTags} className="form-control" placeholder="Please separate values with a comma (eg. Vegan, Gluten Free, etc.)" /></Row>

                    <Row>Ingredients:</Row>
                    <Row><textarea value={this.state.ingredients} onChange={this.handleChangeIngredients} rows="6" className="form-control" placeholder="Please list each ingredient on a separate line" /></Row>

                    <Row>Directions:</Row>
                    <Row><textarea value={this.state.directions} onChange={this.handleChangeDirections} rows="6" className="form-control" placeholder="Please number each direction and place it on a separate line" /></Row>
                    <Row onClick={this.handleSubmit} className="form-row-submit">
                        <p className="form-row-submit-text">Post</p>
                    </Row>
                </Container>
            </Container >
        )
    }
}

export default RecipeForm;