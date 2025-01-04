import { useState, useEffect } from "react";
import axios from "axios";
import Table from 'react-bootstrap/Table';
import delimg from "../images/del.png";
import editimg from "../images/edit.png";
import {useNavigate}  from "react-router-dom";
const Update=()=>{
 const [mydata, setMydata]= useState([]);
 const navigate = useNavigate();
 const loadData=()=>{
 let  api="http://localhost:8000/books/datadisplay";
 axios.get(api).then((res)=>{
  console.log(res.data);
  setMydata(res.data);
 })
  }
  
  useEffect(()=>{
    loadData();
  }, []);

  const myDel=(id)=>{
    let  api="http://localhost:8000/books/datadelete";
   axios.post(api, {id:id}).then((res)=>{
    alert("data deleted!");
    loadData();
   })
  }
  const ans=mydata.map((key)=>{
     return(
      <>
        <tr>
          <td> {key.author_name} </td>
          <td> {key.book_title} </td>
          <td> {key.publish_year} </td>
          <td> {key.price} </td>
          <td> 
            <a href="#" onClick={()=>{navigate(`/editdata/${key._id}`)}} >
            <img src={editimg}  className="imgsize"/>
            </a>
             
          </td>
          <td> 
              <a href="#" onClick={()=>{myDel(key._id)}}>
               <img src={delimg} className="imgsize" />
               </a>
          </td>
        </tr>
      </>
     )
  })
    return(
        <>
          <h1> Display page</h1>
          <Table striped bordered hover>
      <thead>
        <tr>
          <th>Author Name</th>
          <th>Book Title</th>
          <th>Publish Year</th>
          <th>Price</th>
          <th></th>
          <th></th>
        </tr>      
      </thead>
      <tbody>
      {ans}
      </tbody>
      </Table>
        </>
    )
}
export default Update;