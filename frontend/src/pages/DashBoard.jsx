import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { Outlet, Link } from "react-router-dom";

const DashBoard=()=>{
const [username, setUsername]= useState("");
const [useremail, setUserEmail]=useState("");
const navigate= useNavigate();  

useEffect(()=>{
    
    if (localStorage.getItem("username")==null)
    {
        navigate("/home");
    }
    else 
    {
    setUsername(localStorage.getItem("username"));
    setUserEmail(localStorage.getItem("useremail"));
    }
}, [])



const logout=()=>{
    localStorage.clear();
    navigate("/home")

}

    return(
        <>
         <h1> User DashBoard</h1>
           Welcome : {username} Email : {useremail}
           <button onClick={logout}>Logout</button>
           <hr size="3" color="yellow"/>

          <tabe>
            <tr>
                <td> 

                <Link to="repass"> Reset Password</Link>

                </td>
                <td> 

                   <Outlet/>

                </td>
            </tr>
          </tabe>
         
        </>
    )
}

export default DashBoard;