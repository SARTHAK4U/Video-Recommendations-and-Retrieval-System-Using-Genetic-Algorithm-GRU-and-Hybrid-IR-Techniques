import React from 'react';
import ReactDOM from 'react-dom';
import { useSearchParams } from "react-router-dom";
import { Link } from "react-router-dom";
import MyAccount from './accountInfo.js'
import MyUploads from './myUploads.js'
import { useState } from "react";
import {useNavigate } from 'react-router-dom';


const Navbar=()=>
{
  const navigate = useNavigate();

  let [searchParams, setSearchParams] = useSearchParams();
  let [state, setState] = useState(false);
  const LogSearchParams = (event) => {
    // event.preventDefault();
    console.log(searchParams.get("Search"));  // url is assumed as https://.....com?samplekey="dummy"
    navigate(`/search?term=${searchParams.get("Search")}`);
    setState(true);
  };

return (
    <div>
       <nav class="navbar navbar-expand-lg bg-body-tertiary navbar bg-dark" style ={{position:'fixed',width :'100%',top:"0%",margin:"auto",left:"0%", "z-index":"1"}} data-bs-theme="dark"  >
  <div class="container-fluid">
    {/* <a class="navbar-brand" href="#">Reels</a> */}

    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="20" fill="currentColor" class="bi bi-camera-reels" viewBox="0 0 16 16" margin="auto">
  <path d="M6 3a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM1 3a2 2 0 1 0 4 0 2 2 0 0 0-4 0z"/>
  <path d="M9 6h.5a2 2 0 0 1 1.983 1.738l3.11-1.382A1 1 0 0 1 16 7.269v7.462a1 1 0 0 1-1.406.913l-3.111-1.382A2 2 0 0 1 9.5 16H2a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h7zm6 8.73V7.27l-3.5 1.555v4.35l3.5 1.556zM1 8v6a1 1 0 0 0 1 1h7.5a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1z"/>
  <path d="M9 6a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM7 3a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"/>
   </svg>

    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item">
          {/* <a class="nav-link active" aria-current="page" href="#">Home</a> */}
          <Link to="/" class="nav-link">Home</Link>
        </li>
        <li class="nav-item">
        <Link to="upload" class="nav-link">Upload</Link>
          {/* <a class="nav-link" href="upload">Upload</a> */}
        </li>
    
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Account
          </a>
          <ul class="dropdown-menu">
            {/* <li><a class="dropdown-item" href="#">My Account</a></li> */}
            <Link to="/MyAccount" class="dropdown-item">My Account</Link>
            <Link to="/MyUploads" class=" dropdown-item">My Uploads</Link>
            {/* <li><a class="dropdown-item" href="#">Stats</a></li> */}
          </ul>
        </li>
      </ul>
      
    </div>
    
  </div>

  <form  onSubmit={LogSearchParams} id = "SearchInput" class="form-inline my-2 my-lg-0" style = {{margin:"auto" ,position:"absolute",left:"25%",width:"50%",padding:"auto"}}>
      <input  class="form-control mr-sm-2" type="search" placeholder="Search" name ="Search" />
      {/* <button class="btn btn-outline-success my-2 " type="submit" >Search</button> */}
   </form>
  
</nav>
   

    </div>
);

}

export default Navbar;
