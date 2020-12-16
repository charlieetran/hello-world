import React from 'react';
import axios from "axios"
import {
    Button,
    Form
  } from 'react-bootstrap/';


  export default class GetOne extends React.Component {
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
        axios.get(url+id).then(note =>{
            console.log(note.data);
        });
        
    }

    render() {
        return (
            <ul>
            <Form onSubmit={this.handleSubmit}>
              <Form.Group controlId="NoteLookup">
                <Form.Label>Find Note by ID: </Form.Label>
                <Form.Control 
                required 
                type="id"
                placeholder="Enter note ID"
                value={this.state.value}
                onChange={this.handleChange}
                />
              </Form.Group>
              <Button variant="primary" type="submit">
                Find
              </Button>
            </Form>
            </ul>
        );
      }

}


