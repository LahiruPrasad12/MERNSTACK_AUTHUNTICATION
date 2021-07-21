import React from 'react'
import "./SideNav.css"
import "./Home.css"
import image1 from "../images/logo2.png"
import Loggin from '../auth/Login'

export default function Home() {
    return (
        <div class="container-fluid-side-2">
            <div className="Header">
             ADD YOUR TODO HERE
            </div>

            <div className="cont">
                <input type="text" className="sub" placeholder="Subject"/>
            </div>
        </div>
    )
}
