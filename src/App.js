import React, { useState } from "react";
import axios from "axios";
import logo from './logo.svg';
import './App.css';
import { SignUp } from './Screens';
function App() {
    const [text, setText] = useState("");
    const [author, setAuthor] = useState("");
    function getQuote() {
      axios.get("https://localhost:6000", { crossdomain: true }).then(response => {
        setText(response.data.text);
        setAuthor(response.data.author);
      });
    }
    return (
      <div>
        {/* <SignUp/> */}
        <div>
          <button onClick={getQuote}>
            Generate Quote
          </button>
          <h1>{text}</h1>
          <h3>{"-" + author}</h3>
        </div>
      </div>

    );
  }

  export default App;
