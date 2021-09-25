
import './App.css';

import Navber from './components/Navbar';

import Login from './components/login/Login';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Home from './components/Home.js/Home';
import Form from './components/Form/Form';


function App() {
  
  
  return (
  
  <Router>
  <div>
    <Navber></Navber>

    <Switch>
      <Route path="/Home">
   <Home></Home>
      </Route>
      <Route path="/Form">
      <Form></Form>
      </Route>
      <Route path="/Login">
     <Login></Login>
      </Route>
    </Switch>
  </div>
</Router>
  )
}

export default App;
