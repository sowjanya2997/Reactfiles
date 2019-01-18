import React from "react";
import Hello from "./hello";
import Form from "./form";
import rabbit from "../images/rabbit.svg";


const App = () => (
    <div>    
        <Hello name="push"></Hello><Form/>
        <img src={rabbit}></img>
    </div>
);

export default App;