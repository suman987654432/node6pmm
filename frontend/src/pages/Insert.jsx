import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import axios from "axios";

const Insert=()=>{
 
  const [input, setInput] = useState({});


  const handleInput=(e)=>{
    let name=e.target.name;
    let value=e.target.value;
    setInput(values=>({...values, [name]:value}))
    console.log(input);

  }

  const handleSubmit=(e)=>{
    e.preventDefault();
    let api="http://localhost:8000/user/usersave";
   axios.post(api, input).then((res)=>{
    alert("You are succesfully registered!!!");
   })
  }


    return(
        <>
         <h1>Insert User Detail</h1>
         <Form style={{width:"500px"}}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter username</Form.Label>
        <Form.Control type="text" name="username" value={input.username} onChange={handleInput} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter email</Form.Label>
        <Form.Control type="email"  name="email" value={input.email} onChange={handleInput} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter First name</Form.Label>
        <Form.Control type="text" name="firstname" value={input.firstname} onChange={handleInput} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Last name</Form.Label>
        <Form.Control type="text" name="lastname" value={input.lastname} onChange={handleInput} />
      </Form.Group>
      <Button variant="primary" type="submit"  onClick={handleSubmit}>
        Submit
      </Button>
    </Form>
        </>
    )
}

export default Insert;