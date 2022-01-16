import  './styles.css';

function Navbar(){
    return(
    <header>
        <nav className="container">
            <div className="header-nav-content">              
            <h1>IMC-Manager</h1>
            <a href="/pessoas/form">
                <div className="header-contact-container">
                <p className="header-contact-link">Faça seu cadastro</p>
                </div>
            </a>
            </div>
        </nav>
        </header>
    );
}

export default Navbar;