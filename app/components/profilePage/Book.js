  //Each child should know if it has been clicked and if it is clicked then it should handle that click. That handle will hold a function passed to it in a prop and pass an object to it. 
//  Make an object in the child functions handle method and in this object hold ann object and an object. The first object gets placed in the first place and the second object gets put in the second place 

//Look at this later
import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button } from 'react-bootstrap';

class Book extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            clicked : this.props.clicked
        };
      }
    
      render() {
        console.log(this.state.clicked);
        var  len = this.props.myBooks.length;
        let columns = [];
        let columnsNameOnly = [];
        for(var i = 0; i < len; i++){
            columns.push(
                <Col key={i}>
                    <Row>{this.props.myBooks[i].name}</Row>
                    <Row>{this.props.myBooks[i].posts}</Row>
                </Col>
            );
            columnsNameOnly.push(
                <Col key={i}>
                <Row><Button onClick={this.props.clicked()}>{this.props.myBooks[i].name}</Button></Row>
            </Col>
            );
        }
        return (
          <Container fluid>
              {columns}
          </Container>
        )
      }
    }


export default Book;