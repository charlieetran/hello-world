import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Button from 'react-bootstrap/Button';


export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/hello">Hello</Link>
            </li>
            <li>
              <Link to="/goodbye">Goodbye</Link>
            </li>
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

