import React, {useState} from 'react'

export default function Numbers () {
  
    const [allNumbers, setAllNumbers] = useState([1,3,5,7]);
    const [number, setNumber] = useState(0);
  

    const addRandom = ()=> {
        // 1. clone the allNumbers array in the state
        const cloneNumbers = allNumbers.slice()

        // 2. add a random number to the back of the clone
        let randomNumber = Math.floor(Math.random() * 10 + 1)
        cloneNumbers.push(randomNumber);

        // 3. set the cloned array back into the state
        setAllNumbers(cloneNumbers);
    }

    const addNumber = () => {
        // 1. clone the allNumbers array in the state
        const cloneNumbers = allNumbers.slice()

        // 2. add the number to the back of the clone
        cloneNumbers.push(number);

        // 3. set the cloned array back into the state
        setAllNumbers(cloneNumbers);
        
    }

    const handleNumber = (e) => {
        setNumber(e.target.value);
    }


    return <React.Fragment>
        <ul>
            {allNumbers? allNumbers.map(number=><li>{number}</li>) 
                        : <p>Loading...</p>}
        </ul>
        <div>
            <button onClick={addRandom}>Add Random</button>
        </div>
        <div>
            <input type="number" name="newNumber" onChange={handleNumber} value={number}/>
            <button onClick={addNumber}>Add</button>
        </div>
    </React.Fragment>

}