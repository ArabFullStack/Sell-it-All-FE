import './Signup.css'; 
import Logo from '../../Home/Components/images/logo.png';
import LoginFooter from '../../Login/Components/LoginFooter';

function Signup(){ 
    return( 
        <>
        <div className="signup-background-container">
            <div className="signup-container">
                <img src={Logo} alt="sell-it-all logo"/>
                <p className="signup-p"><b>Sign UP</b></p>

                <form action="GET" className="signup-form">
                    <label for="email">Email</label><br/>
                    <input type="email" name="email" id="email"/><br/>

                    <label for="password">Password</label><br/>
                    <input type="password" name="info" id="password"/><br/> 

                    <label for="name">First Name</label><br/>
                    <input type="text" name="firstname" id="name"/><br/>

                    <label for="surname">Last Name</label><br/>
                    <input type="text" name="lastname" id="surname"/><br/>

                    <input id="signup-submit" type="submit" value="Sign Up"/>
                </form>
            </div>

            <div className="signup-account">
                <a href="./Loggedin"><p>Already have an account?<span id="end">Log In</span></p></a>
            </div>

        </div>

        <LoginFooter/>

        </>
    )
}

export default Signup