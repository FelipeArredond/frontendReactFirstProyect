import { Link } from 'react-router-dom';
import './NavBar.css'
import { useContext } from 'react';
import { authContext } from '../../Context/AuthContext';
import LogOut from '../logout/Logout';

export function NavBar(){
    const context = useContext(authContext) 
    return(
        <div>
            <ul>
                {!context.auth.logged&&<li><Link to="/login">Login</Link></li>}
                {!context.auth.logged&&<li><Link to="/signup">Sign up</Link></li>}
                {context.auth.logged&&<li><Link to="/"><LogOut/></Link></li>}
            </ul>
        </div>
    );
}