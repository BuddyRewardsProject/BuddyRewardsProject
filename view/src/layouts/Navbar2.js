import logo from '../assets/img/logoM.svg';
import { Link } from 'react-router-dom';

export default function Navbar2() {

    return (
        <div className="container">
            <nav class="navbar navbar-expand-lg navbar-light bg-light white">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">
                        <div>
                            <img src={logo} className="logo-padding" alt="buddyrewards" width="280" />
                        </div>
                    </Link>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNavDarkDropdown">
                        <div className="btn-group">
                            <button type="button" className="btn btn-outline-secondary dropdown-toggle" data-bs-toggle="dropdown" data-bs-display="static" aria-expanded="false">
                                Right-aligned, left-aligned lg
                            </button>
                            <ul className="dropdown-menu dropdown-menu-end dropdown-menu-lg-start">
                                <li><a className="dropdown-item" href="#">Menu item</a></li>
                                <li><a className="dropdown-item" href="#">Menu item</a></li>
                                <li><a className="dropdown-item" href="#">Menu item</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}
