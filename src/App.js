import './App.css';
import {
  Router,
  Switch,
  Route
} from "react-router-dom";
import {
  Button,
  Form
} from 'react-bootstrap/';
import history from './history';
import axios from "axios"


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
      <ul>
      <Form>
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>Note: </Form.Label>
          <Form.Control as="textarea" rows={3} />
          <Form.Text className="text-muted">
            Must be non-empty.
          </Form.Text>
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      </ul>
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


function SubmitNote(text) {
  const url = "http://localhost:8080/notes";
  <Content></Content>
  axios.post(url, {
    content: text}
  );
}

function Content() {
  return (
  <label>
      Note: 
      <input type="text" />;
  </label>
  );
}