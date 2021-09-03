import { useState } from 'react'

function SignupForm({onLogin}) {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [passwordConfirmation, setPasswordConfirmation] = useState("")
    const [errors, setErrors] = useState([])
    console.log(username, password, passwordConfirmation)
    console.log(errors)

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
                r.json().then((err) => console.log(err.exception))
            }
        })

        
    }
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
                {errors.map((error) => {
                    return <p key ={error}>{error}</p>
                })}
                
                <button>Submit</button>
            </form>
   

            
        </div>
    )
}

export default SignupForm