import './Home.css'; 
import Nav from './Nav';
import Bed from './images/bed.png'
import Books from './images/books.png'
import purpleShirt from './images/purpleShirt.png'
import Decor from './images/decor.png'
import livingRoom from './images/livingRoom.png'
import Nearby from './images/near.png'
import Search from './images/search.png';
import OrangeCouch from './images/Rectangle 189.png';
import BlueShirt from './images/Rectangle 190.png';
import GreyCouch from './images/Rectangle 191.png';
import Notebooks from './images/Rectangle 192.png';
import BlueCouch from './images/Rectangle 193.png';
import GreenCouch from './images/Rectangle 194.png';
import BlackShirt from './images/Rectangle 195.png';
import BrownCouch from './images/Rectangle 196.png';
import NavySeat from './images/Rectangle 197.png';
import ArtFrame from './images/Rectangle 198.png';
import ChairFootRest from './images/Rectangle 199.png';
import WhiteShirt from './images/Rectangle 200.png';
import WhiteSweatshirt from './images/Rectangle 201.png';
import GreyUpholsteredCouch from './images/Rectangle 202.png';
import FloralPainting from './images/Rectangle 203.png';
import WoodDresser from './images/Rectangle 204.png';


function Home(){ 
    return( 
        <>
            <Nav/> {/*adding the navigation page*/}
            <header className="home-header">
                <h2 className="home-h2">Sell it or Buy it</h2>
                <h2 className="home-h2-white">The Choice is Yours </h2> 
                <div className="home-sections">
                    <div>
                        <a href=""><img src={Bed} alt="bed"/></a>
                        <figcaption>Bedroom</figcaption>
                    </div>
                   
                   <div>
                        <a href=""><img src={Books} alt="bed"/></a>
                        <figcaption>Books</figcaption>
                    </div>

                    <div>
                        <a href=""><img src={purpleShirt} alt="bed"/></a>
                        <figcaption>Clothes</figcaption>
                    </div>

                    <div>
                        <a href=""><img src={Decor} alt="bed"/></a>
                        <figcaption>Decor</figcaption>
                    </div>
                    
                    <div>
                        <a href=""><img src={livingRoom} alt="bed"/></a>
                        <figcaption>Living Room</figcaption>
                    </div>
                    
                    <div>
                        <a href=""><img src={Nearby} alt="bed"/></a>
                        <figcaption>See All Nearby</figcaption>
                    </div>
                </div>

            </header>
            
                <form method="GET" className="home-form"> 
                    <div className="search-container">
                        <input type="search" name="search" placeholder="Search"/>
                        <button type="submit"><img src={Search} alt="search icon"/></button>
                    </div>
                    <input className="location-input" type="text" name="location" placeholder="Location"/> {/*not sure if text is the right input type*/}
                </form>
           

            <div className="home-main"> 
                <h2 className="home-h2">Explore</h2> {/*has the same class name as header*/}
                <div className="home-grid-container">
                    <div>
                        <img src={OrangeCouch} alt="orange couch"/>
                        <figcaption>Orange Cushion Couch <br/>
                        <span className="home-price">$100-Queens,NY</span>
                        </figcaption>
                    </div>

                    <div>
                    <img src={BlueShirt} alt="polka dot shirt"/>
                        <figcaption>Blue Polka Dot Shirt <br/>
                        <span className="home-price">$20-Brooklyn,NY</span>
                        </figcaption>
                    </div>

                    <div>
                        <img src={GreyCouch} alt="grey couch"/>
                        <figcaption>Grey Couch with Pillows <br/>
                        <span className="home-price">$200-Brooklyn,NY</span>
                        </figcaption>
                    </div>

                    <div>
                        <img src={Notebooks} alt="notebooks"/>
                        <figcaption>Color Coded Notebooks <br/>
                        <span className="home-price">$10-Long Island,NY</span>
                        </figcaption>
                    </div>

                    <div>
                        <img src={BlueCouch} alt="blue couch"/>
                        <figcaption>Light Blue Couch <br/>
                        <span className="home-price">$275-Brooklyn,NY</span>
                        </figcaption>
                    </div>

                    <div>
                        <img src={GreenCouch} alt="green couch"/>
                        <figcaption>Dark Green Lounge Couch <br/>
                        <span className="home-price">$325-Long Island City,NY</span>
                        </figcaption>
                    </div>

                    <div>
                        <img src={BlackShirt} alt="black shirt"/>
                        <figcaption>Black Shirt Plain Text<br/>
                        <span className="home-price">$35-Brooklyn,NY</span>
                        </figcaption>
                    </div>

                    <div>
                        <img src={BrownCouch} alt="brown couch"/>
                        <figcaption>Brown Couch (3 People)<br/>
                        <span className="home-price">$550-Staten Island,NY</span>
                        </figcaption>
                    </div>

                    <div>
                        <img src={NavySeat} alt="navy seat"/>
                        <figcaption>Navy Seat <br/>
                        <span className="home-price">$55-Staten Island,NY</span>
                        </figcaption>
                    </div>

                    <div>
                        <img src={ArtFrame} alt="art frame"/>
                        <figcaption>Beautiful White Frame Art<br/>
                        <span className="home-price">$25-Manhattan,NY</span>
                        </figcaption>
                    </div>

                    <div>
                        <img src={ChairFootRest} alt="orange chair and foot rest"/>
                        <figcaption>Orange Chair and Foot Rest <br/>
                        <span className="home-price">$63-Queens,NY</span>
                        </figcaption>
                    </div>

                    <div>
                        <img src={WhiteShirt} alt="white shirt"/>
                        <figcaption>White Hotel Shirt <br/>
                        <span className="home-price">$20-Brooklyn,NY</span>
                        </figcaption>
                    </div>

                    <div>
                        <img src={WhiteSweatshirt} alt="white sweatshirt"/>
                        <figcaption>White Sweatshirt<br/>
                        <span className="home-price">$45-Brooklyn,NY</span>
                        </figcaption>
                    </div>

                    <div>
                        <img src={GreyUpholsteredCouch} alt="grey couch"/>
                        <figcaption>Grey Upholstered Couch <br/>
                        <span className="home-price">$700-Queens,NY</span>
                        </figcaption>
                    </div>

                    <div>
                        <img src={FloralPainting} alt="floral painting"/>
                        <figcaption>Floral Painting<br/>
                        <span className="home-price">$22-Manhattan,NY</span>
                        </figcaption>
                    </div>

                    <div>
                        <img src={WoodDresser} alt="wood dresser"/>
                        <figcaption>Wooden Dresser <br/>
                        <span className="home-price">$150-Long Island,NY</span>
                        </figcaption>
                    </div>

                </div>
            </div>



        </>
    )
}

export default Home;