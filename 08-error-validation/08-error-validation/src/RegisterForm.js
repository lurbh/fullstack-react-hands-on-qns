import React, {useState} from 'react'

const specialchar = [
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*"
]

export default function RegisterForm() {

    const [userName, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const checkUsername = () => {
      if(userName.length < 4 || userName.length > 10)
        return "Username must be between 4 to 10 characters long.";
      else
        return "";
    }

    const checkEmail = () => {
      if(!email.includes("@"))
        return "Email address must contain an `@` character";
      else 
        return "";
    }

    const checkPassword = () => {
      let hasDigit = false;
      let hasAlphabet = false;
      let hasSpecial = false;

      for (let l of password)
      {
        const ascii = l.charCodeAt(0);
        if(ascii >= 48 && ascii <= 57)
          hasDigit = true;
        if((ascii >= 65 && ascii <= 90) || (ascii >= 97 && ascii <= 122))
          hasAlphabet = true;
        if(specialchar.includes(l))
          hasSpecial = true;
      }

      if(!(hasDigit && hasAlphabet && hasSpecial))
        return "Password must have at least one special character (!, @, #, $, %, ^, & or *) and must have at least one digit, and one alphabet."
      else
        return "";
    }

    return (
      <React.Fragment>
        <div>
            <label>Username:</label>
            <input type="text" name="username" onChange={(e)=>{
              setUsername(e.target.value);
            }}/>
            <span class="error">{checkUsername()}</span>
        </div>
        <div>
            <label>Email:</label>
            <input type="text" name="email" onChange={(e)=>{
              setEmail(e.target.value);
            }}/>
            <span class="error">{checkEmail()}</span>
        </div>
        <div>
            <label>Password:</label>
            <input type="text" name="password" onChange={(e)=>{
              setPassword(e.target.value);
            }}/>
            <span class="error">{checkPassword()}</span>
        </div>
      </React.Fragment>
    )
}