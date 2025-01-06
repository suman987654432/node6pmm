import axios from "axios";
import { useState } from "react";
const Search=()=>{
 const [book, setBook]= useState("");
 const [mydata, setMydata]=useState([]);
 const handleSubmit=()=>{
  let  api="http://localhost:8000/books/datasearch";
  axios.post(api, {book:book}).then((res)=>{
    setMydata(res.data);
  })
 }
 const ans= mydata.map((key)=>{
  return(
    <>
     <tr>
      <td>{key.author_name}</td>
      <td>{key.book_title}</td>
      <td>{key.publish_year}</td>
      <td>{key.price}</td>
     </tr>
    </>
  )
 });

  return(
        <>
          <h1> Search Data</h1>
          Enter Book name : <input type="text" value={book} 
          onChange={(e)=>{setBook(e.target.value)} } />
          <button onClick={handleSubmit}> Search book</button>
          <hr />
          <table>
            <tr>
              <th>Author name</th>
              <th>Book title</th>
              <th>Publish year</th>
              <th>Price</th>
            </tr>
            {ans}
          </table>
        </>
    )
}

export default Search;