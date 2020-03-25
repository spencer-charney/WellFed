import React from 'react';

class RecipeForm extends React.Component {
    render() {
        return (
            <div>
                <center>
                <h2>New Recipe</h2>
                </center>
                <form>
                    <div className="form-group">
                        <label className="form-label">Title: </label>
                        <input type="text" className="form-control" id="title" placeholder="Title"></input>
                    </div>
                    <div className="form-group">
                        <label className="form-label">Description: </label>
                        <textarea type="text-area" className="form-control" id="description" placeholder="Please describe this dish" rows="3"></textarea>
                    </div>
                </form>
            </div>
        )
    }
}

export default RecipeForm;