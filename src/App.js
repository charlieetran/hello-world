import './App.css';
import {
  Router,
  Switch,
  Route
} from "react-router-dom";
import Button from 'react-bootstrap/Button';
import history from './history';
import axios from "axios"


export default function App() {
  return (
    <Router history={history}>
      <div>
        <nav>
          <ul>
            <li>
              <Button onClick={onButtonClick}>Switch Page</Button>
            </li>
            <li>
              <Button onClick={callBackend}>Call Backend</Button>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/goodbye">
            <Goodbye />
          </Route>
          <Route path="/">
            <Hello />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Hello() {
  return <h2>Hello, World!</h2>;
}

function Goodbye() {
  return <h2>Goodbye!</h2>;
}

function onButtonClick() {
  if(history.location.pathname === "/"){
    return history.push('/goodbye');
  } 
    return history.push('/');
}

function callBackend() {
  const url = "http://localhost:8080/users";
  axios.get(url);

}
