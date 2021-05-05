import { Helmet } from 'react-helmet'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from "./pages/Home"
import Register from "./pages/Register"
import Login from './pages/Login';

function App() {
  return (
    <div className="App">
      <Helmet>
        <title>Buddy Rewards</title>
      </Helmet>
      <Router>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <div class="container-fluid">
            <Link class="navbar-brand" to="/">
              <img src="./img/logodemo.png" alt="buddyrewards" width="30" height="30" />
            </Link>
            <div class="collapse navbar-collapse justify-content-end" id="navbar">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <Link class="nav-link" to="/register">
                    <button class="btn btn-outline-primary">Register</button>
                    </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/login">
                    <button class="btn btn-outline-warning">Login</button>
                    </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <br />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
        </Switch>
      </Router>
    </div >
  );
}

export default App;