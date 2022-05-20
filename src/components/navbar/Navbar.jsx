import { Link } from 'react-router-dom';
import './NavBar.css'

export function NavBar(){
    return(
        <>
            <ul>
                <li><a><Link to='/login'>Log In</Link></a></li>
                <li><a><Link to='/signup'>Sign Up</Link></a></li>
                <li><a><Link to='/section'>Pages</Link></a></li>
            </ul>
        </>
    );
}