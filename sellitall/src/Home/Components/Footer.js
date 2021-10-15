import './Footer.css'; 
import twitter from './images/twitter.png';
import facebook from './images/facebook.png'; 
import instagram from './images/instagram.png';


function Footer(){ 
    return( 
        <>
           <footer className="home-footer" >
               <div className="footer-container">
                    <ul>
                        <a href="https://twitter.com"><img src={twitter} alt="twitter"/></a>
                        <a href="https://facebook.com"><img src={facebook} alt="facebook"/></a>
                        <a href="https://instagram.com"><img src={instagram} alt="instagram"/></a>
                    </ul>

                    <p className="footer-small-p">
                        <small>Privacy Policy | Terms &amp; Conditions<br/>
                        @2021 Sell-It-All</small>
                    </p>
                </div>
            </footer>

        </>
    )
}

export default Footer