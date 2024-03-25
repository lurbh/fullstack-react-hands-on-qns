import React, {useState} from 'react'

export default function Numbers(){

    const [allNumbers, setAllNumbers] = useState([1,3,5,7,14,15])

    function removeAtRandom(){
        
        // 1. pick a random index to remove
        let indexToRemove = Math.floor(Math.random() * allNumbers.length);

        // 2. clone the allNumbers array from the state
        const clonedNumbers = allNumbers.slice();

        // 3. remove the number specified at  the index in the `indexAtRemove` variable
        clonedNumbers.splice(indexToRemove,1);

        // 4. set the clone back into the state
        setAllNumbers(clonedNumbers);
    }

    return <React.Fragment>
      <ul>
        {allNumbers.map(number=> <li> {number} </li>)}
      </ul>
      <div>
         <button onClick={removeAtRandom}>Remove Random</button>
      </div>     
    </React.Fragment>

}
