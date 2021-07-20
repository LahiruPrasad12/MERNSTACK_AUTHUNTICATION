import React,{ useState } from 'react'
import { Link } from 'react-router-dom';
import axios from "axios"
import image1 from "../images/logo2.png"
import "./register.css"
import validation from 'validator'

export default function Register() {

    const[email,setEmail] = useState("");
    const [password, setpassword] = useState("");
    const [verifyPassword, setconPassword] = useState("");

   async function register(){
        if(email.length==0 || !validation.isEmail(email)){
            document.getElementById('mail_error').style.display = "block";
            document.getElementById('password_error').style.display = "none";
            document.getElementById('conPassword_error').style.display = "none";
            document.getElementById('exists').style.display = "none";
        }else if(password.length==0){
            document.getElementById('mail_error').style.display = "none";
            document.getElementById('password_error').style.display = "block";
            document.getElementById('conPassword_error').style.display = "none";
            document.getElementById('exists').style.display = "none";
        }else if(verifyPassword.length == 0 || password!=verifyPassword ){
            document.getElementById('conPassword_error').style.display = "block";
            document.getElementById('mail_error').style.display = "none";
            document.getElementById('password_error').style.display = "none";
            document.getElementById('exists').style.display = "none";
            
        }else{

            try{
                const registreData = {
                    email,
                    password,
                    verifyPassword
                }
    
                await axios.post("http://localhost:5000/user/register",registreData).then(()=>{
                    window.location="/login"
                }).catch((err)=>{
                    document.getElementById('exists').style.display = "block";
                    document.getElementById('password_error').style.display = "none";
                    document.getElementById('mail_error').style.display = "none";
                    document.getElementById('conPassword_error').style.display = "none";
                })
    
            }catch(err){
                console.error(err);
            }

        }


        
    }
    

    return (
        <div className="container">
        <div className="row">
            <div className="col-md-3"></div>
            <div className="col-md-6">
              
            <img className="logoImage" src={image1} alt="Logo"/>
                <h1 className="text-center1">REGISTER</h1>
                
                <input type="email" className="form-control" name="Email" placeholder="Enter your E-mail address"
                onChange={(e)=> setEmail(e.target.value)} value={email} required/>
                 <div id="mail_error" style={{ display: "none", color:"red", marginLeft:0,marginTop:-5 }}>please enter valid email</div><br />
                <input type="password" className="form-control" name="password1" placeholder="Enter your password"
                 onChange={(e)=> setpassword(e.target.value)} required/>
                  <div id="password_error" style={{ display: "none", color:"red", marginLeft:0,marginTop:-5 }}>please enter password</div><br />
                <input type="password" className="form-control" name="password2" placeholder="Confirm your password"
                 onChange={(e)=> setconPassword(e.target.value)} required/>
                  <div id="conPassword_error" style={{ display: "none", color:"red", marginLeft:0,marginTop:-5 }}>confirm password doesn't match</div><br />
                  <div id="exists" style={{ display: "none", color:"red", marginLeft:0,marginTop:-30 }}>entered mail address is already exists</div><br />

                <a href onClick={e=>{register()}} ><div className="btn btn-info6">Register</div></a>
               <h3 className= "register">I haven an account?<Link to="/login" className="regLink"> Log in</Link></h3>
            </div>
            
            <div className="col-md-3">

            </div>
        </div>
        
    </div>
    )
}
