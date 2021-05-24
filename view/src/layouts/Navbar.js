import logo from '../asssets/img/logoM.svg';
import { Link } from 'react-router-dom';

export default function Navbar() {

  return (
    <div className="container">
      <nav class="navbar navbar-expand-lg navbar-light bg-light white">
        <div class="container-fluid">
          <Link class="navbar-brand" to="/">
            <div>
              <img src={logo} class="logo-padding" alt="buddyrewards" width="280" />
            </div>
          </Link>
          <div class="collapse navbar-collapse justify-content-end" id="navbar">
            <ul class="navbar-nav">
              <li class="nav-item">
                <Link class="nav-link" to="/merchant/register">
                  <button class="btn btn-outline-primary">Register</button>
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/merchant/login">
                  <button class="btn btn-outline-warning">Login</button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
