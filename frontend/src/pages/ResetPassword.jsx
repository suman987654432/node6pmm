import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { message } from 'antd';
import { useNavigate } from 'react-router-dom';
const ResetPassword=()=>{
    const [input, setInput] = useState({});
    const [userid, setUserid]= useState("");
    const navigate= useNavigate();
    useEffect(()=>{
      setUserid(localStorage.getItem("userid"))
    }, []);

    const handleInput=(e)=>{
    let name=e.target.name;
    let value=e.target.value;
    setInput(values=>({...values, [name]:value}))
    console.log(input);
  }

  const handleSubmit=async(e)=>{
    e.preventDefault();
    let api="http://localhost:8000/user/passwordchange";
    try {
      const res= await axios.post(api, {userid:userid, ...input});
      message.success("Password succesfully change!!!"); 
      navigate("/home");
     } catch (error) {
          message.error(error.response.data.msg);
     }

  }


    return(
        <>
           <Form style={{width:"500px"}}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter old password</Form.Label>
        <Form.Control type="password" name="oldpassword" value={input.password} onChange={handleInput} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter new password</Form.Label>
        <Form.Control type="password" name="newpassword" value={input.password} onChange={handleInput} />
      </Form.Group>
      <Button variant="primary" type="submit"  onClick={handleSubmit}>
        Submit
      </Button>
    </Form>
        </>
    )
}
export default ResetPassword;