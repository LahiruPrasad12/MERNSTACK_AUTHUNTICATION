import React, { useContext } from 'react'
import {Link} from "react-router-dom";
import AuthContext from '../context/AuthContext';
import "./SideNav.css"
import image from "../images/Student4.jpg"
export default function SideNav() {
    const { loggedIn } = useContext(AuthContext);
    console.log(loggedIn)
    console.log("okkk")

    return (

        <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid-side">
        <a href="/logout" className="nav-link">ADD-TODO</a><br></br>
        <a href="/logout" className="nav-link">NEW-TODO</a><br></br>
        <a href="/logout" className="nav-link">OLD-TODO</a><br></br><br></br>
          <a href="/logout" className="nav-link">VIEW MY PROFILE</a>
        </div>
      </nav>


      

    )
}
