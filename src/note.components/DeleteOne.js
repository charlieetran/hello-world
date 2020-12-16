import React from 'react';
import axios from "axios"
import {
    Button,
    Form,
    Col
  } from 'react-bootstrap/';


  export default class DeleteOne extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
    handleChange(event) {
        this.setState({value: event.target.value});
    }
    
    handleSubmit(event) {
        event.preventDefault();
        var id = this.state.value
        const url = "http://localhost:8080/notes/";
        axios.delete(url+id).then(note =>{
            console.log(note.data);
        });
        
    }

    render() {
        return (
            <ul>
            <Form onSubmit={this.handleSubmit}>
              <Form.Group controlId="NoteDelete">
                <Form.Label>Delete Note: </Form.Label>
                <Col sm={5}>
                <Form.Control 
                required 
                type="id"
                placeholder="Enter note ID"
                value={this.state.value}
                onChange={this.handleChange}
                />
                </Col>
              </Form.Group>
              <Button variant="primary" type="submit">
                Delete
              </Button>
            </Form>
            </ul>
        );
      }

}

