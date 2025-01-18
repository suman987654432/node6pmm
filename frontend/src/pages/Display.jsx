import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Display=()=>{
    const [mydata, setMydata]= useState([]);
    const navigate = useNavigate();


    const loadData=async()=>{
        let api="http://localhost:8000/user/studentdisplay";
        
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
            <td>  <img src={key.imgname} width="200" height="150" />  </td>
            <td> {key.rollno}  </td>
            <td> {key.name}  </td>
            <td> {key.city}  </td>
            <td> {key.fees}  </td>
           
          </tr> 
        </>
      )
   })

    return(
        <>
          <h1> Display Student Detail</h1>
          <table border="1" width="600">
            <tr>
                <th> </th>
                <th> Rollno</th>
                <th> Name </th>
                <th>  City </th>
                <th> Fees</th>
            </tr>
            {ans}
          </table>
        </>
    )
}

export default Display;