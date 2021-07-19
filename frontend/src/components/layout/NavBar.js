import React, { useContext } from 'react'
import {Link} from "react-router-dom";
import AuthContext from '../context/AuthContext';
import "./NavBar.css"
// import { AuthContext } from '../context/AuthContext';

function Navbar() {

    const { loggedIn } = useContext(AuthContext);
    console.log(loggedIn)
    console.log("okkk")

    return (

        <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <a href="" className="nav-link">Home</a>
          <a href="" className="nav-link">Contact Us</a>
          <a href="" className="nav-link">About</a>
          <a href="/logout" className="nav-link">Log out</a>
        </div>
      </nav>




        // <div>
        //     {!loggedIn && (<>
        //         <Link to = "/login">login</Link>
        //         <Link to = "/register">register</Link>
               
        //     </>
        //     )}
        //     {loggedIn && (<>
        //     <Link to = "/home">Home</Link>
        //     <Link to = "/user">Create Custeomer</Link>
        //     <Link to = "/logout">Log out</Link>
        //     </>)}
           
        // </div>

      

    )
}

export default Navbar;