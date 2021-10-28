import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home/Components/Home';
import Login from './Login/Components/Login';
import Signup from './Signup/Components/Signup';
import Upload from './Home/Components/Upload';
import Uploaded from './Home/Components/Uploaded'
 



function App() {
  return (
      <Router>
          <>
          <Switch>
              <Route exact path="/"component={Home}/>
              <Route exact path="/Login"component={Login}/>
              <Route exact path="/Signup" component={Signup} />
              <Route exact path="/Upload" component={Upload} />
              <Route exact path="/Uploaded" component={Uploaded}/>
                  

      
          </Switch>
          </>
      </Router>
   
   
  );
}

export default App;
