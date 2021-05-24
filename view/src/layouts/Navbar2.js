import logo from '../asssets/img/logoM.svg';
import { Link } from 'react-router-dom';

export default function Navbar2() {

    return (
        <div className="container">
            <nav class="navbar navbar-expand-lg navbar-light bg-light white">
                <div class="container-fluid">
                    <Link class="navbar-brand" to="/">
                        <div>
                            <img src={logo} class="logo-padding" alt="buddyrewards" width="280" />
                        </div>
                    </Link>
                    <div class="collapse navbar-collapse justify-content-end" id="navbarNavDarkDropdown">
                        <div class="btn-group">
                            <button type="button" class="btn btn-outline-secondary dropdown-toggle" data-bs-toggle="dropdown" data-bs-display="static" aria-expanded="false">
                                Right-aligned, left-aligned lg
                            </button>
                            <ul class="dropdown-menu dropdown-menu-end dropdown-menu-lg-start">
                                <li><a class="dropdown-item" href="#">Menu item</a></li>
                                <li><a class="dropdown-item" href="#">Menu item</a></li>
                                <li><a class="dropdown-item" href="#">Menu item</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}
