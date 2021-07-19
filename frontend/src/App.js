import React from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Navbar from "./components/layout/NavBar";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import axios from "axios";

axios.defaults.withCredentials = true;

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path = "/user"><div>Home</div></Route>
        <Route exact path = "/login"><div><Login/></div></Route>
        <Route exact path = "/register"><div><Register/></div></Route>
        {/* <Route path="/register" exact component={Register}/> */}

      </Switch>

    </BrowserRouter>
  );
}

export default App;
