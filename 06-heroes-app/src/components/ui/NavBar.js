import React, { useContext } from 'react';
import {Link, NavLink} from  'react-router-dom';
import { AuthContext } from '../../auth/AuthContext';
import { types } from '../../types/types';

export const Navbar = () => {
    const {user, dispatch} = useContext(AuthContext)

        const handleLogout = ({history}) => {
            history.replace("/login");

            const logout = {
                type: types.logout,
            }
            dispatch(logout)
        }

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
                        {user.logged && <div className="nav-item nav-link ">Hello {user.name}!</div>}
                        <button 
                            className="nav-item nav-link btn" 
                            onClick={handleLogout}
                        >
                            {user.logged && <div>LogOut</div> || <div>Login</div>}
                        </button>
                    </ul>
                </div>
            </nav>
        );
}