import {  NavLink, useNavigate } from 'react-router-dom';
import '../../style/Navbar.css'


export const Navbar = () => {


    const navigate = useNavigate();

    const onLogout = () => {
        navigate('/login', {
            replace: true
        });
    }

    return (
        <nav className="nav_header">
            

            <div className="navbar_collapse">
                <div className="navbar-nav">
                    <NavLink 
                        className={ ({isActive}) => `nav-item   ${ isActive ? 'active':'' }` } 
                        to="/"
                    >
                        Saint Seiya
                    </NavLink>

                    <NavLink 
                        className={ ({isActive}) => `nav-item   ${ isActive ? 'active':'' }` } 
                        to="/bronze"
                    >
                        Bronze
                    </NavLink>

                    <NavLink 
                        className={ ({isActive}) => `nav-item   ${ isActive ? 'active':'' }` }
                        to="/gold"
                    >
                        Gold
                    </NavLink>
                    <NavLink 
                        className={ ({isActive}) => `nav-item   ${ isActive ? 'active':'' }` }
                        to="/search"
                    >
                        Search
                    </NavLink>
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
                <ul className="navbar-nav ml-auto">
                    <button
                        className="nav-item nav-link btn"
                        onClick={ onLogout }
                    >
                        Logout
                    </button>
                </ul>
            </div>
        </nav>
    )
}