import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import axios from "axios";

const Insert=()=>{
    const [input, setInput]=useState({});

    const handleInput=(e)=>{
         let name=e.target.name;
         let value=e.target.value;
         setInput(values=>({...values, [name]:value}));
         console.log(input);
    }


    const handleSubmit=()=>{
        let api="http://localhost:8000/books/datasave";
        axios.post(api, input).then((res)=>{
            alert("Save");
        })
    }

    return(
        <>
          <h1> Insert Book</h1>          
          <Form style={{width:"300px"}}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Author name</Form.Label>
        <Form.Control type="text" name="authorname" 
        value={input.authorname} onChange={handleInput}  />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Book Title</Form.Label>
        <Form.Control type="text" name="booktitle" 
        value={input.booktitle} onChange={handleInput}  />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Publish Year</Form.Label>
        <Form.Control type="date" name="publishdate" 
        value={input.publishdate} onChange={handleInput}   />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Price</Form.Label>
        <Form.Control type="number" name="bookprice" 
        value={input.bookprice} onChange={handleInput}  />
      </Form.Group>
      <Button variant="primary" type="button" onClick={handleSubmit}>
        Submit
      </Button>
    </Form>
        </>
    )
}

export default Insert;