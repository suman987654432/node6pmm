import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Display=()=>{
    const [mydata, setMydata]= useState([]);
    const navigate = useNavigate();


    const loadData=async()=>{
        let api="http://localhost:8000/user/userdisplay";
        
        const response= await axios.get(api);
        console.log(response.data);
        setMydata(response.data);

    }

    useEffect(()=>{
        loadData();
    }, [])


    const addMoreBook=(aid)=>{
      navigate(`/addmorebook/${aid}`);
   
    }

   const ans=mydata.map((key)=>{
      return(
        <>
          <tr>
            <td> {key.authorname}  </td>
            <td> {
                   key.books.map((key1)=>{
                     return(
                      <>
                         <p> {key1.booktitle} price : {key1.bookprice}  </p>
                      
                      </>
                     )

                   })
              
                 }</td>


                 <td>

                    <button onClick={()=>{addMoreBook(key._id)}}> Add more Book</button>
                 </td>
          </tr> 
        </>
      )
   })

    return(
        <>
          <h1> Display User Detail</h1>
          <table border="1" width="600">
            <tr>
                <th> Author name</th>
                <th> Books Detail </th>
                <th> </th>
            </tr>
            {ans}
          </table>
        </>
    )
}

export default Display;