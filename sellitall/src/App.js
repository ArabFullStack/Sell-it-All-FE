import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home/Components/Home';
import Login from './Login/Components/Login';


function App() {
  return (
      <Router>
          <>
          <Switch>
              <Route exact path="/"component={Home}/>
              <Route exact path="/Login"component={Login}/>
          </Switch>
          </>
      </Router>
   
   
  );
}

export default App;
