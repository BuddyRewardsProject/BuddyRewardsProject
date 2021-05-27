import logo from '../assets/img/logoM.svg';
import { Link } from 'react-router-dom';

export default function Navbar() {

  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light bg-light white">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <div>
              <img src={logo} className="logo-padding" alt="buddyrewards" width="280" />
            </div>
          </Link>
          <div className="collapse navbar-collapse justify-content-end" id="navbar">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/merchant/register">
                  <button className="btn btn-outline-primary">Register</button>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/merchant/login">
                  <button className="btn btn-outline-warning">Login</button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
