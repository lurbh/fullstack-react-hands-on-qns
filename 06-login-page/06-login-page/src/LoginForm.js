import { useState } from "react";

export default function LoginForm(){
    const [username,setUserName] = useState("");
    const [password,setPassword] = useState("");

    function handleSubmit()
    {
        if(username === "rotiprataguy")
            if(password === "rotiprata123")
            {
                alert("Login success")
                return;
            }
        alert("Invalid login")
    }

    return (
        <>
            <label>Username:</label>
            <input type="text" onChange={(event)=> setUserName(event.target.value)}/>
            <label>Password:</label>
            <input type="password" onChange={(event)=> setPassword(event.target.value)}/>
            <button onClick={handleSubmit}>Login</button>
        </>
    )
}