import React, {useState} from 'react'

function ColoredBox() {

    const [color, setColor] = useState(1);

    const getColor = () => {
        if (color === 1) {
            return 'red';
        }
        if (color === 2) {
            return 'blue';
        }
        if (color === 3) {
            return 'green';
        }
    }

    const beRed = () => {
        setColor(1);
    }

    const beBlue = () => {
        setColor(2);
    }

    const beGreen = () => {
        setColor(3);
    }

    return <React.Fragment>
        <div style={{
            border:'1px black solid',
            width:'50px',
            height:'50px',
            backgroundColor: getColor()
        }}>
        </div>

        <button onClick={beRed}>Red</button>
        <button onClick={beGreen}>Green</button>
        <button onClick={beBlue}>Blue</button>
    </React.Fragment>
  
}

export default ColoredBox;