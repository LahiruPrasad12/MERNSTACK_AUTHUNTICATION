import React, { useContext } from 'react'
import {Link} from "react-router-dom";
import AuthContext from '../context/AuthContext';
// import { AuthContext } from '../context/AuthContext';

function Navbar() {

    const { loggedIn } = useContext(AuthContext);
    console.log(loggedIn)
    console.log("okkk")

    return (
        <div>
            <Link to = "/home">Home</Link>

            {!loggedIn && (<>
                <Link to = "/login">login</Link>
                <Link to = "/register">register</Link>
            </>
            )}
            {loggedIn && <Link to = "/user">Create Custeomer</Link>}
           
        </div>
    )
}

export default Navbar;