import logo from '../assets/img/logoMB.svg';
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
                                profile
                            </button>
                            <ul className="dropdown-menu dropdown-menu-end dropdown-menu-lg-start">

                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}
