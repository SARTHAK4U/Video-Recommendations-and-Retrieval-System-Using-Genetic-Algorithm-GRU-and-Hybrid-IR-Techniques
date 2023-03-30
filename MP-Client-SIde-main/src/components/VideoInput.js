import React, { useState } from 'react';
import axios from 'axios';
import './FileUpload.css';
const config = require('./path.json');

function FileUpload() {
  const [file, setFile] = useState(null);

  const handleFileChange = event => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = event => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('file', file);
    axios.post(config.path+'/upload', formData, {
        headers: { 'Bypass-Tunnel-Reminder': 'true',"Access-Control-Allow-Origin": "*",}
    })
    .then(response => {
      console.log(response.data);
      // Handle the response data
    })
    .catch(error => {
      console.error(error);
      // Handle the error
    });
  };

  return (
    <div >

      <form onSubmit={handleSubmit} className="file-upload-container">

      <label htmlFor="file-upload" className="file-upload-label">
          Choose a file
        </label>

      <div className="input">
     

        <input
          id="file-upload"
          type="file"
          onChange={handleFileChange}
          className="file-upload-input"
        />
      </div>
        <button type="submit" className="file-upload-button">
          Upload
        </button>

      </form>
    </div>
  );
}

export default FileUpload;
