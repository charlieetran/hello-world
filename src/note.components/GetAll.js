import React from 'react';
import axios from "axios"
import {
    Button
  } from 'react-bootstrap/';

  export default class GetAll extends React.Component {
    


    fetchNotes(event)  {
        event.preventDefault();
        const url = "http://localhost:8080/notes";
        axios.get(url).then(notes =>{
           console.log(notes.data);
        })
    }

    render() {
        return(
            <ul>
                <li>
                    <Button onClick ={this.fetchNotes}>Get Notes</Button>
                </li>
                
            </ul>
        )
    }

  }