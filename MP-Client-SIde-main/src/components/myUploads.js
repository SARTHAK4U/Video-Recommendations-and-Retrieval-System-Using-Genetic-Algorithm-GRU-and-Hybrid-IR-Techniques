import "./styles.css";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
const config = require('./path.json');
    
function MyComponent() {
  const base_url = config.path
  const url = base_url+'/uploaded/'
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    axios.get(url,
    {
      headers: { 'Bypass-Tunnel-Reminder': 'true',"Access-Control-Allow-Origin": "*","ngrok-skip-browser-warning": "69420",}
     })
      .then(response => {
        // Map over the response data to convert each video URL to a blob
        console.log(response.data)

        const promises = Object.keys(response.data).map((key,index) => fetch(base_url+'/serveUploadedFile/'+key,
         {
          headers: { 'Bypass-Tunnel-Reminder': 'true',"Access-Control-Allow-Origin": "*"}
         }).then(res => res.blob()).then(res=> [res,response.data[key]])
         
         
         );

        console.log(promises)
        Promise.all(promises)
          .then(blobs => {
            // Map over the blobs to create a URL for each video
            const urls = blobs.map(blob => [URL.createObjectURL(blob[0]),blob[1]]);
            setVideos(urls);
          });
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <h1 style={{position:"absolute",textAlign:"center",top:"7%",margin:"auto","z-index":"1",width:"100%"}}>My Uploads </h1>
    <div className="UploadedVideosMain">
       {videos.map((url, index) => (

<div class="card" style={{width: "98%",margin:"10px"}}>
<video className='UploadedVideos' key={index} src={url[0]}  width='30%'
              height='30%'
              muted = {true} controls />
<div class="card-body">
  <p class="card-title">Description</p>
  <p class="card-text">{url[1]}</p>
 
</div>
</div>

       
      ))}
    </div>
    </div>
  );
}
export default MyComponent;

