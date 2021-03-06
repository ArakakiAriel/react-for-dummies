import React from 'react';
import {Link, NavLink} from  'react-router-dom';

export const Navbar = () => {
        return (
            <nav className="navbar navbar-expand-sm navbar-light bg-warning ">
                
                <Link 
                    className="navbar-brand" 
                    to="/"
                ><img
                    src={`./assets/heroes/h_icon.png`}
                    className="logo"
                />
                </Link>
    
                <div className="navbar-collapse">
                    <div className="navbar-nav">
    
                        <NavLink 
                            activeClassName="active"
                            className="nav-item nav-link" 
                            exact
                            to="/marvel"
                        >
                            Marvel
                        </NavLink>
    
                        <NavLink 
                            activeClassName="active"
                            className="nav-item nav-link" 
                            exact
                            to="/dc"
                        >
                            DC
                        </NavLink>
                        <NavLink 
                            activeClassName="active"
                            className="nav-item nav-link" 
                            exact
                            to="/search"
                        >
                            Search
                        </NavLink>
                    </div>
                </div>
    
                <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
                    <ul className="navbar-nav ml-auto">
                        <NavLink 
                            activeClassName="active"
                            className="nav-item nav-link" 
                            exact
                            to="/login"
                        >
                            {false && <div>LogOut</div> || <div>Login</div>}
                        </NavLink>
                    </ul>
                </div>
            </nav>
        );
}