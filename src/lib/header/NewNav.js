import logo from '../images/logo.png';
import Mask from '../images/Mask.png';
import '../../styles/header.scss';
const NewNav = () => {
    return(
        <nav className="navbar navbar-expand-lg navbar-light mainNav">
            <div className="container-fluid">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
                    <div className="navbar-brand">
                        <img src={logo} width="151" height="53" className="d-inline-block align-text-top" alt=""/>
                    </div>
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 listHolder">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Menu One</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Menu Two</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Menu Three</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Menu Four</a>
                        </li>
                    </ul>
                    <li className="nav-item dropdown" style={{display:'inline-flex'}}>
                        <img src={Mask} width="50" height="55" className="d-inline-block align-text-top" alt=""/>
                        <a className="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                            User
                        </a>

                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                            <li><a className="dropdown-item" href="#">Action</a></li>
                            <li><a className="dropdown-item" href="#">Another action</a></li>
                            <li><a className="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                    </li>
                    {/* <form class="d-flex">
                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button class="btn btn-outline-success" type="submit">Search</button>
                    </form> */}
                </div>
            </div>
        </nav>
    );
 }

export default NewNav;