import { useState } from "react";
import axios from "axios";
const Insert=()=>{
  const [input, setInput]=useState({});
  const handleInput=(e)=>{
    let name=e.target.name;
    let value=e.target.value;
    setInput(values=>({...values, [name]:value}));
    console.log(input)
  }
  const handleSubmit=()=>{
    let api="http://localhost:8000/students/datasave";
    axios.post(api, input).then((res)=>{
      alert("data save!!!");
    })
  }
  return(
    <>
      <h1> Insert Student Data</h1>
      Enter Rollno : <input type="text" name="rollno" value={input.rollno} onChange={handleInput} />
      <br/>
      Enter name : <input type="text" name="name" value={input.name} onChange={handleInput} />
      <br/>
      Enter city : <input type="text" name="city" value={input.city} onChange={handleInput} />
      <br/>
      Enter fees : <input type="text" name="fees" value={input.fees} onChange={handleInput} />
      <br/>
      <button onClick={handleSubmit}> Data Save!</button>
    </>
  )
}
export default Insert;