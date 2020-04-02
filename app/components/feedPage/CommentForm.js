import React from 'react';
import { FaTelegramPlane } from 'react-icons/fa';
import Row from 'react-bootstrap/Row';
import { IconContext } from "react-icons";


class CommentForm extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChangeComment = this.handleChangeComment.bind(this);
        this.state = {
            comment: ""
        };
    }
    handleSubmit(event) {
        //Where you would send message to server
        console.log(this.state.comment);
        event.preventDefault();
    }
    handleChangeComment(event) {
        this.setState({ comment: event.target.value });
    }
    render() {
            return(
                <form onSubmit={this.handleSubmit}>
                    <Row className="form-group">
                        <label>
                            Comment:
                    </label>
                        <textarea value={this.state.comment} onChange={this.handleChangeComment} rows="3" className="form-control" placeholder="Your comment here" />
                        <IconContext.Provider value={{ color: "blue", className: "icons global-class-name", size: '2em' }}>
                                <div>
                                <input type="submit" value="Post" className="btn btn-primary" />
                                    <FaTelegramPlane />
                                </div>
                        </IconContext.Provider>
                    </Row>
                </form>
            ) 
    }
}

export default CommentForm;