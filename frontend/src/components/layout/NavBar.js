import React from 'react'
import {Link} from "react-router-dom";

function Navbar() {
    return (
        <div>
            <Link to = "/user">Home</Link>
            <Link to = "/login">login</Link>
            <Link to = "/register">register</Link>
        </div>
    )
}

export default Navbar;