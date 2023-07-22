import logo from './assets/logo-color.png';


const Navbar = () => {
    return ( 
        <nav className="navbar">
            <a href="/">
                <img src = {logo} id = "navbar-logo" alt = "logo" ></img>
            </a>
            <a href="/Categories">Categories</a>
            <a href="/Join">Join our Team</a>
            <a href="/Help">Help</a>
            
        </nav>
     );
}
 
export default Navbar;