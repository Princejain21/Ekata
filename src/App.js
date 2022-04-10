import './App.css';
import SignUp from './Components/Home/signUp/SignUp';
import SignIn from './Components/Home/SignIn/SignIn';
import Navbar from './Components/Navbar/Navbar';
import Dashboard from './Components/Dashboard/Dashboard'
import Create from './Components/Create/Create'
import RedirectResult from './Components/Dashboard/RedirectResult';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/'><SignIn/></Route>
          <Route exact path='/dashboard'><Dashboard /></Route>
          <Route exact path='/create'><Create /></Route>
          <Route exact path='/dashboard/:id'><RedirectResult/></Route>
          <Route exact path='/Signup'><SignUp/></Route>
        </Switch>

      </Router>
    </>
    
  );
}

export default App;
