import React from 'react';
import axios from "axios"
import {
    Button,
    Form,
    Col
  } from 'react-bootstrap/';


  export default class UpdateOne extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: '', id: ''};

        this.handleID = this.handleID.bind(this);
        this.handleValue = this.handleValue.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
    handleValue(event){
        this.setState({value: event.target.value});
    }

    handleID(event) {
        this.setState({id: event.target.value});
    }
    
    handleSubmit(event) {
        event.preventDefault();
        var id = this.state.id
        const url = "http://localhost:8080/notes/";
        axios.put(url+id, {content:this.state.value}).then(note =>{
            console.log(note.data);
        });
        
    }

    render() {
        return (
            <ul>
            <Form onSubmit={this.handleSubmit}>
              <Form.Group controlId="NoteID">
                <Form.Label>Update Note: </Form.Label>
                <Col sm={5}>
                <Form.Control 
                required 
                type="id"
                placeholder="Enter note ID"
                id={this.state.id}
                onChange={this.handleID}
                />
                </Col>
              </Form.Group>
              <Form.Group controlId="NoteUpdate">
                <Col sm={5}>
                <Form.Control 
                required 
                as="textarea" 
                rows={3}
                value={this.state.value}
                onChange={this.handleValue}
                />
                </Col>
              </Form.Group>
              <Button variant="primary" type="submit">
                Update
              </Button>
            </Form>
            </ul>
        );
      }

}
