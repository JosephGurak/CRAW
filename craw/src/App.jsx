import { useState } from "react";

import { invoke } from "@tauri-apps/api/core";
import "./App.css";
import whitek2 from './assets/whitek2.png';
import ferrisCRAW from './assets/ferrisCRAW.png';

function App() {
  

  return (
    
      
    <div className ="circle-button__container">
      <div data-tauri-drag-region className="circle">
        <div className = "cirlce">
          <img src = {ferrisCRAW} alt="main k-mini image"/>
        </div>
        <div data-tauri-drag-region className="circle-invisible">
          <div className="small-circle">   
              <div className="sub-menu0"> </div>
              <div className="sub-menu0"> </div>
              <div className="sub-menu0"> </div>         
            <a href="#"> <i id="submenu0" className='bx bx-plus'></i></a>
          </div>
          <div className="small-circle">
              <div className="sub-menu1"> </div>
              <div className="sub-menu1"> </div>
              <div className="sub-menu1"> </div>
            <a href="#"> <i id="submenu1" className='bx bx-home'></i></a>
          </div>
          <div className="small-circle">
              <div className="sub-menu2"> </div>
              <div className="sub-menu2"> </div>
              <div className="sub-menu2"> </div>           
            <a href="#"> <i id="submenu2" className='bx bx-message-square-dots'></i></a>
          </div>
          <div className="small-circle">
              
            <a href="#"> <i id="submenu3" className='bx bx-wrench'></i></a>
          </div>
          <div className="small-circle">
              
            <a href="#"> <i id="submenu4" className='bx bx-cog'></i></a>
          </div>
          <div className="small-circle">
              
            <a href="#"> <i id="submenu5" className='bx bx-camera'></i></a>
          </div>
        </div>
      </div>
    </div>

    
  );
}

export default App;
