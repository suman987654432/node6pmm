import { useState } from "react";
import axios from 'axios';

const Insert = () => {
    const [file, setFile] = useState(null); // default to null, since there is no file initially

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!file) {
            alert("Please select a file to upload");
            return;
        }
        const formData = new FormData();
        formData.append("file", file);
        const api = "http://localhost:8000/userimage/datasave"; 
        try {
            const response = await axios.post(api, formData, {
                headers: { 'Content-Type': 'multipart/form-data' }
            });
            alert(response.data);
        } catch (error) {
            console.error("Error uploading file:", error);
        }
    };

    return (
        <>
            <label>Upload file</label>
            <input
                type="file"
                onChange={(e) => setFile(e.target.files[0])} // get the first file from FileList
            />
            <button onClick={handleSubmit}>Submit</button>
        </>
    );
};

export default Insert;
