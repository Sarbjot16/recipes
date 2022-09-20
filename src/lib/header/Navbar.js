import logo from '../images/logo.png';
import '../../styles/header.scss';
const Navbar = () => {
    return(
        <header>
            <div className='logo-holder'>
                <div className="logo">
                    <img src={logo} alt=""/>
                </div>
            </div>
            <nav>
                <ul>
                    <li className="active">
                        <a href="#">Menu one</a>
                    </li>
                    <li>
                        <a href="#">Menu Two</a>
                    </li>
                    <li>
                        <a href="#">Menu Three</a>
                    </li>
                    <li>
                        <a href="#">Menu Four</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
export default Navbar;