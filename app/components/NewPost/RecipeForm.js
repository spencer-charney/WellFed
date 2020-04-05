import React from 'react';
import { create } from './apiPost';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'

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
            directions: ''
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
        //THis is where one would send a message to the server
        console.log(this.state.title);
        console.log(this.state.description);
        console.log(this.state.totalTime);
        console.log(this.state.serves);
        console.log(this.state.tags);
        console.log(this.state.ingredients);
        console.log(this.state.directions);
        //See if one can remove the below line and still post to the server
        event.preventDefault();
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
                    <Row>
                        <Button onClick={this.handleSubmit}>Post</Button>
                    </Row>
                </Container>
            </Container >
        )
    }
}

export default RecipeForm;