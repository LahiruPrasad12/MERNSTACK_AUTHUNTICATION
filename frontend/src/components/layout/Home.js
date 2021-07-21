import React,{ useState} from 'react'
import "./SideNav.css"
import "./Home.css"
import image1 from "../images/logo2.png"
import Loggin from '../auth/Login'

export default function Home() {
    const [subject, setsubject] = useState("");
    const [priority, setpriority] = useState("");
    const [endDate, setendDate] = useState();
    const [description, setdescription] = useState("")

    function saveData(e){
        alert("OK");
    }




    return (
        <div class="container-fluid-side-2">
            <div className="Header">
             ADD YOUR TODO HERE
            </div>

            <div className="cont">
                <input type="text" className="sub" placeholder="Subject" onChange={(e)=>{setsubject(e.target.value)}} value={subject}/>
                <h4 className="des1">Select task priority</h4>&nbsp;&nbsp;&nbsp;<h4 className="des2">Select task end date</h4>
 
                <select className="form"
                onChange={(e)=>{setpriority(e.target.value)}} value={priority}>
                    <option selected>Open this select menu</option>
                    <option value="1">High</option>
                    <option value="2">Midium</option>
                    <option value="3">Law</option>
                </select>&nbsp;&nbsp;&nbsp; 
                <input type="date" className="cal" placeholder="Select Your date" onChange={(e)=>{setendDate(e.target.value)}} value={endDate}/><br></br>

            
               
                <input type="text" className="desc" placeholder="Enter Description" onChange={(e)=>{setdescription(e.target.value)}} value={description}/>

               
            </div>

            <button className="ok" onClick={saveData}>Create TO-DO</button>

            
         </div>

        
    )
}
