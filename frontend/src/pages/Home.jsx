import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import axios from 'axios';
import {useNavigate} from "react-router-dom";
const Home=()=>{
  const [email, setEmail] = useState("");
  const [password, setPassword]= useState("");

  const navigate = useNavigate();
  const handleSubmit=async(e)=>{
    e.preventDefault();
    try {
      let api="http://localhost:8000/user/userlogin";
      const response= await axios.post(api, {email:email, password:password})
      if (response.status==200)
      {
         navigate("/dashboard")
      }    
   

    } catch (error) {
        alert(error.response.data.msg);
    }
    
  }

    return(
        <>
          <h1> User Login!</h1>

          <Form style={{width:"500px"}}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter email</Form.Label>
        <Form.Control type="email" name="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter password</Form.Label>
        <Form.Control type="password" name="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} />
      </Form.Group>
      <Button variant="primary" type="submit"  onClick={handleSubmit}>
        Submit
      </Button>
    </Form>
        
        </>
    )
}

export default Home;