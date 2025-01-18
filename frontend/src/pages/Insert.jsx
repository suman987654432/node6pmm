import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import axios from "axios";

const Insert=()=>{
   const [input, setInput] = useState({});
   const [uploadImage, setUploadImage]=useState("");

  const handleInput=(e)=>{
    let name=e.target.name;
    let value=e.target.value;
    setInput(values=>({...values, [name]:value}))
    //console.log(input);
  }

   const handleImage=(e)=>{
           console.log(e.target.files[0]);
           setUploadImage(e.target.files[0])
   }



  const handleSubmit=async(e)=>{
    e.preventDefault();
    const formData= new FormData();
    formData.append("file", uploadImage);
    formData.append("upload_preset", "myphotos");
    formData.append('cloud_name', 'dyfr12jd5');

    const response = await axios.post('https://api.cloudinary.com/v1_1/dyfr12jd5/image/upload', formData); 
    console.log(response.data.url);

    let api="http://localhost:8000/user/datasave";
    const resp1= await axios.post(api, {imgname:response.data.url, ...input});

    alert("data succesfully inserted!!");

    
  }


    return(
        <>
         <h1>Insert User Detail</h1>
         <Form style={{width:"500px"}}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Rollno</Form.Label>
        <Form.Control type="text" name="rollno" value={input.rollno} onChange={handleInput} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter name</Form.Label>
        <Form.Control type="text"  name="name" value={input.name} onChange={handleInput} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter city</Form.Label>
        <Form.Control type="text" name="city" value={input.city} onChange={handleInput} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter fees</Form.Label>
        <Form.Control type="text" name="fees" value={input.fees} onChange={handleInput} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>upload image</Form.Label>
        <Form.Control type="file" name="file" onChange={handleImage} />
      </Form.Group>
      <Button variant="primary" type="submit"  onClick={handleSubmit}>
        Submit
      </Button>
    </Form>
        </>
    )
}

export default Insert;