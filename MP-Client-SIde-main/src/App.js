
import './App.css';
import Video from './components/video.js';
import Nav from './components/navbar.js';
import Upload from './components/upload.js';
import MyUploads from './components/myUploads.js'
import MyAccount from './components/accountInfo'
import Search from './components/search'
import { Routes ,Route } from 'react-router-dom';




function App() {
  return (

    <div className="App"> 
    <Nav/>

    <Routes>
      <Route path='/search' element={<Search/>} />
      <Route exact path='/' element={<Video/>} />
      <Route exact path='/upload' element={<Upload/>} />
      <Route exact path='/MyUploads' element={<MyUploads/>} />
      <Route exact path='/MyAccount' element={<MyAccount/>} />
     
    </Routes>



  


    </div>
  );
}

export default App;
