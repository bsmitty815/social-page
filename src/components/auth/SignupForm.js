import { useState } from 'react'

function SignupForm({onLogin}) {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [passwordConfirmation, setPasswordConfirmation] = useState("")
    const [errors, setErrors] = useState([])


    //function for new user to sing up
    function handleSubmit(event) {
        event.preventDefault()
        fetch("/signup", {
            method: "POST",
            headers: {
                "Accepts": "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({user: {
                username,
                password,
                password_confirmation: passwordConfirmation
            }
            }),
        }).then((r) => {
            if (r.ok) {
                r.json().then((user) => onLogin(user))
                setUsername("")
                setPassword("")
                setPasswordConfirmation("")
            } else {
                r.json().then((err) => setErrors(Object.values(err.exception)))
            }
        })
    }

    //methods to help display the errors on the page
    const errorsString = errors.join("").split(":").slice(-1)
    const errorsContainer = errorsString[0].replace(">", "")
    

    return (
        <div>
            <h1>Signup</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username: </label>
                <input type="text" name="username" id="signup-username" value={username} onChange={(e) => setUsername(e.target.value)}/>
                <br></br>
                <label htmlFor="password">Password: </label>
                <input type="password" name="password" id="signup-password" autoComplete="on" value={password} onChange={(e) => setPassword(e.target.value)}/>
                <br></br>
                <label htmlFor="password confirmation">Password Confirmation: </label>
                <input type="password" name="password_confirmation" id="password_confirmation" autoComplete="on" value={passwordConfirmation} onChange={(e) => setPasswordConfirmation(e.target.value)}/>
                <br></br>

                <p>{errorsContainer}</p>

                
                <button  className="myButton" >Submit</button>
            </form>
   

            
        </div>
    )
}

export default SignupForm