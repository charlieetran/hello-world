import React from 'react';
import axios from "axios"
import {
    Button,
    Form
  } from 'react-bootstrap/';

export default class NoteForm extends React.Component {
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
        alert('A note was submitted: ' + this.state.value);
        const url = "http://localhost:8080/notes";
        axios.post(url, {
            content: this.state.value}
        )
        
    }

    render() {
        return (
            <ul>
            <Form onSubmit={this.handleSubmit}>
              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Note: </Form.Label>
                <div>
                <Form.Control 
                required 
                as="textarea" 
                rows={3}
                value={this.state.value}
                onChange={this.handleChange}
                />
                </div>
                <Form.Text className="text-muted">
                  Must be non-empty.
                </Form.Text>
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
            </ul>
        );
      }

}


