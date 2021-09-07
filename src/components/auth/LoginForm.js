import { useState } from "react"


function LoginForm({onLogin}) {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [errors, setErrors] = useState([])

    function handleSubmit(event) {
        event.preventDefault()
        fetch("/login", {
            method: "POST",
            headers: {
                "Accepts": "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({username, password}),
        }).then((r) => {
            if (r.ok) {
                r.json().then((user) => onLogin(user))
                setUsername("")
                setPassword("")
            } else {
                r.json().then((err) => setErrors(err.error))
            }
        })


    }


    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username: </label>
                <input type="text" name="username" id="username" value={username} onChange={(e) => setUsername(e.target.value)}/>
                <br></br>
                <label htmlFor="password">Password: </label>
                <input type="password" name="password" autoComplete="on" id="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                <br></br>
                <p key ={errors}>{errors}</p>
                <button className="myButton" >Submit</button>
            </form>
        </div>
    )
}

export default LoginForm