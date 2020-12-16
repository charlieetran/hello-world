import './App.css';
import {
  Router,
  Switch,
  Route
} from "react-router-dom";
import {
  Button
} from 'react-bootstrap/';
import history from './history';
import NoteForm from './note.components/NoteForm.js';
import GetAll from './note.components/GetAll.js';
import DeleteAll from './note.components/DeleteAll.js';


export default function App() {
  return (
    <Router history={history}>
      <div>
        <Switch>
          <Route path="/goodbye">
            <Goodbye />
          </Route>
          <Route path="/">
            <Hello />
          </Route>
        </Switch>
      </div>
      <nav>
      <ul>
        <li>
          <Button onClick={switchPage}>Switch Page</Button>
        </li>
      </ul>
      </nav>
    <NoteForm></NoteForm>
    <GetAll></GetAll>
    <DeleteAll></DeleteAll>
    </Router>
    
  );
}

function Hello() {
  return <h2>Hello, World!</h2>;
}

function Goodbye() {
  return <h2>Goodbye!</h2>;
}

function switchPage() {
  if(history.location.pathname === "/"){
    return history.push('/goodbye');
  } 
    return history.push('/');
}

