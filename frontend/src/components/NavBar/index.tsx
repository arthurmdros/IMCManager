import { Link } from 'react-router-dom';
import './styles.css';

type Props = {
    link: string;
    label: string;
}

function Navbar({link, label} : Props) {
    return (
        <header>
            <nav className="container">
                <div className="header-nav-content">
                        <span>IMC-Manager</span>
                        <div className="header-content-container">
                            <Link className="button" to={link}>{label}</Link>
                        </div>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;