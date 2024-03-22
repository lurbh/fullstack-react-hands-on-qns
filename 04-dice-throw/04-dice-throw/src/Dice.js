import { useState } from "react";

export default function Dice(){
    const [num,setNum] = useState(1);

    const rollDice = () => {
        setNum(Math.floor(Math.random() * 6) + 1)
    };

    return <>
    <div style={{
        padding : "15px",
        width: "50px",
        border : "2px black solid",
    }}>{num}</div>
    <button onClick={rollDice}>Roll Dice</button>
    </>;
}