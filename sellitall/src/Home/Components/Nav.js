import './Nav.css'; 
import Logo from './images/logo.png';

function Nav(){ 
    return( 
        <>
            <nav className="landing-nav">
                <a href="/"><img src={Logo} alt="sell-it-all logo"/></a>
                <ul className="landing-ul">
                    <a href=""><li>Sell</li></a>
                    <a href=""><li>Buy</li></a>
                    <a className="nav-user" href=""><li>Sign In</li></a>
                </ul>
            </nav>

        </>
    )
}

export default Nav