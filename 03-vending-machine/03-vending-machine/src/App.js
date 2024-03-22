import React from 'react';
import { useState } from 'react';

export default function App () {

  const [displayMessage,setDisplayMessage] = useState("");

  function coffee()
  {
    setDisplayMessage("Dispensing coffee")
  }

  function tea()
  {
    setDisplayMessage("Dispensing tea")
  }

  function orangeJuice()
  {
    setDisplayMessage("Dispensing orange juice")
  }
  
  return (
      <React.Fragment>
        <h1>Drink Vending Machine</h1>
        <div className="display">
          {displayMessage}
        </div>
        <button onClick={coffee}>Coffee</button>
        <button onClick={tea}>Tea</button>
        <button onClick={orangeJuice}>Orange Juice</button>
      </React.Fragment>
    );
  
}


