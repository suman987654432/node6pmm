import axios from "axios";
import { useState, useEffect } from "react";


const Display=()=>{
    const [mydata, setMydata]= useState([]);


    const loadData=async()=>{
        let api="http://localhost:8000/user/userdisplay";
        
        const response= await axios.get(api);
        console.log(response.data);
        setMydata(response.data);

    }

    useEffect(()=>{
        loadData();
    }, [])

   const ans=mydata.map((key)=>{
      return(
        <>
          <tr>
            <td> {key.firstname} {key.lastname}  </td>
            <td> {key.userid.email}</td>
            <td> {key.userid.username} </td>
          </tr>
        </>
      )
   })

    return(
        <>
          <h1> Display User Detail</h1>
          <table border="1" width="600">
            <tr>
                <th> Full name</th>
                <th> Email </th>
                <th> User ID name  </th>
            </tr>
            {ans}
          </table>
        </>
    )
}

export default Display;