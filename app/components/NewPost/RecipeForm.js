import React from 'react';
import { create } from './apiPost';

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

    handleChangeTags(event){
        this.setState({ tags: event.target.value});
    }

    handleChangeIngredients(event) {
        this.setState({ ingredients: event.target.value });

    }

    handleChangeDirections(event) {
        this.setState({ directions: event.target.value });

    }

    render() {
        return (
            <div>
                <center>
                    <h2>New Recipe</h2>
                </center>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>
                            Title:
                        </label>
                        <input type="text" value={this.state.title} onChange={this.handleChangeTitle} className="form-control" placeholder="Title of Recipe"/>
                    </div>
                    <div className="form-group">
                        <label >
                            Description:
                        </label>
                        <textarea value={this.state.description} onChange={this.handleChangeDescription} className="form-control" placeholder="Please describe your dish"/>
                    </div>
                    <div className="form-group">
                        <label >
                            Total Time:
                        </label>
                        <input type="text" value={this.state.totalTime} onChange={this.handleChangeTotalTime} className="form-control" placeholder="Please specify unit of time (minutes or hours)"/>
                    </div>
                    <div className="form-group">
                        <label >
                            Serves:
                        </label>
                        <input type="text" value={this.state.serves} onChange={this.handleChangeServes} className="form-control" placeholder="Servings"/>
                    </div>
                    <div className="form-group">
                        <label>
                            Tags:
                        </label>
                        <input type="text" value={this.state.tags} onChange={this.handleChangeTags} className="form-control" placeholder="Please separate values with a comma (eg. Vegan, Gluten Free, etc.)" />
                    </div>
                    <div className="form-group">
                        <label >
                            Ingredients:
                        </label>
                        <textarea value={this.state.ingredients} onChange={this.handleChangeIngredients} rows="6" className="form-control" placeholder="Please list each ingredient on a separate line"/>
                    </div>
                    <div className="form-group">
                        <label>
                            Directions:
                        </label>
                        <textarea value={this.state.directions} onChange={this.handleChangeDirections} rows="6" className="form-control" placeholder="Please number each direction and place it on a separate line"/>
                    </div>
                    <center>                    
                        <input type="submit" value="Post" className="btn btn-primary"/>
                    </center>
                </form>
            </div>
        )
    }
}

export default RecipeForm;