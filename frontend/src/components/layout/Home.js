import React,{ useState, createContext, useContext} from 'react'
import "./SideNav.css"
import "./Home.css"
import image1 from "../images/logo2.png"
import Loggin from '../auth/Login'
import AuthContext from '../context/AuthContext';
import axios from "axios"

export default function Home() {

    const { loggedIn } = useContext(AuthContext);


    const [userMail, setmail] = useState("")
    const [subject, setsubject] = useState("");
    const [priority, setpriority] = useState("");
    const [endDate, setendDate] = useState();
    const [description, setdescription] = useState("")

    async function saveData(e){
        setmail(loggedIn.mail);

        

        try{
            const newTodo = {
                userMail,subject,priority,endDate,description
            }
            console.log(userMail,subject,priority,endDate,description)

            await axios.post("http://localhost:5000/todo/add",newTodo).then(()=>{
                alert("Success")
             }).catch((err)=>{
                alert(err);
             })
        }catch(err){
            alert(err);
        }
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
                    <option value="High">High</option>
                    <option value="Midium">Midium</option>
                    <option value="Midium">Law</option>
                </select>&nbsp;&nbsp;&nbsp; 
                <input type="date" className="cal" placeholder="Select Your date" onChange={(e)=>{setendDate(e.target.value)}} value={endDate}/><br></br>

            
               
                <input type="text" className="desc" placeholder="Enter Description" onChange={(e)=>{setdescription(e.target.value)}} value={description}/>

               
            </div>

            <button className="ok" onClick={saveData}>Create TO-DO</button>

            
         </div>

        
    )
}
