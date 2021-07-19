import React from 'react'
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Navbar from "./components/layout/NavBar";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import Home from './components/layout/Home';

export default function Router() {
    return (
        <BrowserRouter>
      <Navbar/>
      <Switch>
        <Route exact path = "/home"><Home/></Route>
        <Route exact path = "/login"><div><Login/></div></Route>
        <Route exact path = "/register"><div><Register/></div></Route>
        {/* <Route path="/register" exact component={Register}/> */}

      </Switch>

    </BrowserRouter>
    )
}
