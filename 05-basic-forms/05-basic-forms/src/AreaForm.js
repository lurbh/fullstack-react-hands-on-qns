import React from 'react'
import { useState } from 'react'

export default function AreaForm(){
  const [width,setWidth] = useState(0);
  const [height,setHeight] = useState(0);
  const [area,setArea] = useState(0);

  const updateWidth =  (event) => {
    setWidth(event.target.value);
    setArea(event.target.value * height);
  }

  const updateHeight = (event) => {
    setHeight(event.target.value);
    setArea(width * event.target.value);
  }
  
  return (
    <React.Fragment>
      <div>
        <label>Width:</label>
        <input type="text" onChange={updateWidth}/>
      </div>
      <div>
        <label>Height:</label>
        <input type="text" onChange={updateHeight}/>
      </div>
      <div>Area = {area}</div>
    </React.Fragment>
  )
  
    

}

