import React, { useContext } from 'react'
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Navbar from "./components/layout/NavBar";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import Home from './components/layout/Home';
import AuthContext from './components/context/AuthContext';
import Logout from './components/auth/Logout';
import SideNav from './components/layout/SideNav';
import Customers from './components/customer/Customers';

export default function Router() {

  const { loggedIn } = useContext(AuthContext);
  
    console.log("pak")
    console.log(loggedIn)
    return (

      <BrowserRouter>
      {
        loggedIn != null && (<>
            
            <Route exact path = "/home"><Navbar/><Home/><SideNav/></Route>
            <Route exact path = "/logout"><Logout/></Route>
            
           
            
        </>)
      }

      {
        loggedIn == null && (<>
           
            <Route exact path = "/register"><Register/></Route>
            <Route exact path = "/login"><Login/></Route>
        </>)
      }
      </BrowserRouter>





    //   <BrowserRouter>
      
    //     <Navbar/>
    //     <Switch>

    //       {
    //         loggedIn && (<>
    //             <Route exact path = "/home"><Home/></Route>
    //             <Route exact path = "/logout"><Logout/></Route>
    //         </>)
    //       }


    //       {
    //         !loggedIn && (<>
    //              <Route exact path = "/login"><div><Login/></div></Route>
    //              <Route exact path = "/register"><div><Register/></div></Route>
    //         </>)
    //       }
          
         
    //     {/* <Route path="/register" exact component={Register}/> */}

    //     </Switch>

    // </BrowserRouter>
    )
}
