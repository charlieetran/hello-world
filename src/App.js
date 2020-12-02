import './App.css';
import {
  Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Button from 'react-bootstrap/Button';
import history from './history';


export default function App() {
  return (
    <Router history={history}>
      <div>
        <nav>
          <ul>
              <Button onClick={onButtonClick}>Switch</Button>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/goodbye">
            <Goodbye />
          </Route>
          <Route path="/hello">
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
  if(history.location.pathname === "/hello"){
    return history.push('/goodbye');
  } 
    return history.push('/hello');
}
