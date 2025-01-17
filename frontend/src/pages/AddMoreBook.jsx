import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import axios from "axios";
import { useParams } from 'react-router-dom';

const AddMoreBook=()=>{
    const [input, setInput] = useState({});
    const {id} = useParams();

    const handleInput=(e)=>{
        let name=e.target.name;
        let value=e.target.value;
        setInput(values=>({...values, [name]:value}))
        console.log(input);
    
      }
    
      const handleSubmit=(e)=>{
        e.preventDefault();
        let api="http://localhost:8000/user/addmorebook";
       axios.post(api, {id:id, ...input}).then((res)=>{
        alert("You are succesfully registered!!!");
       })
    }

    return(
        <>
       
           <Form style={{width:"500px"}}>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Book Title</Form.Label>
        <Form.Control type="text"  name="booktitle" value={input.booktitle} onChange={handleInput} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Book Price</Form.Label>
        <Form.Control type="text" name="bookprice" value={input.bookprice} onChange={handleInput} />
      </Form.Group>
      <Button variant="primary" type="submit"  onClick={handleSubmit}>
        Submit
      </Button>
    </Form>

        </>
    )
}

export default AddMoreBook;