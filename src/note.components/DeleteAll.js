import React from 'react';
import axios from "axios"
import {
    Button
  } from 'react-bootstrap/';

  export default class DeleteAll extends React.Component {
    


    deleteNotes(event)  {
        event.preventDefault();
        const url = "http://localhost:8080/notes";
        axios.delete(url).then(notes =>{
           console.log(notes.data);
        })
    }

    render() {
        return(
            <ul>
                <li>
                    <Button onClick ={this.deleteNotes}>Delete All Notes</Button>
                </li>
                
            </ul>
        )
    }

  }