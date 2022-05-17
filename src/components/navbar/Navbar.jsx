import './NavBar.css'
import logo from './logo.jpg'

export function NavBar(){
    return(
        <>
            <ul>
                <li><a><img src={logo} alt="Logo" srcset="" /></a></li>
                <li><a>Test</a></li>
                <li><a>Test</a></li>
                <li><a>Test</a></li>
                <li><a>Test</a></li>
                <li><a>Test</a></li>
                <li><a>Test</a></li>
            </ul>
        </>
    );
}