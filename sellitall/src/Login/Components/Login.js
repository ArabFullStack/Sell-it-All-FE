import './Login.css'; 
import Logo from '../../Home/Components/images/logo.png';
import LoginFooter from './LoginFooter';

function Login(){ 
    return( 
        <>
        <div className="login-background-container">
            <div className="login-container">
                <img src={Logo} alt="sell-it-all logo"/>
                <p className="login-p"><b>LOGIN</b></p>

                <form action="GET" className="login-form">
                    <label for="email">Email</label><br/>
                    <input type="email" name="email" id="email"/><br/>

                    <label for="password">Password</label><br/>
                    <input type="password" name="info" id="password"/><br/>

                    <input id="submit" type="submit" value="Login"/>
                </form>
            </div>

            <div className="login-account">
                <a href=""><p>Forgot your password?</p></a>
                <a href=""><p>Don't have an account <span id="start">Get Started</span></p></a>
            </div>

        </div>

        <LoginFooter/>

        </>
    )
}

export default Login
