import React, { useState } from "react";
import './App.css';
import Router from "./Config/routes";
import { AdminHome } from "./Screens";
function App() {
    return (
      <div>
        {/* <Router/> */}
        <AdminHome/>
      </div>    
    );
    }
  export default App;
