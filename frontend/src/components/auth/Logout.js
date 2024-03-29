import React,{useHistory, useContext, useEffect, useState} from 'react'
import axios from 'axios';
import AuthContext from '../context/AuthContext';

export default function Logout() {

    const {getLogged} = useContext(AuthContext);
    // const history = useHistory();

    async function logOut(){
        try{
            await axios.get("http://localhost:5000/user/logout").then(async()=>{
            await getLogged();
            window.location = "/login"
        }).catch((err)=>{
            alert(err)
        })

        }catch(err){

        }

    }


    useEffect(() => {
       logOut();
    }, [])

    return (
        <div>
            
        </div>
    )
}
