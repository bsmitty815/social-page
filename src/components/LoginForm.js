import { useState } from "react"
function LoginForm({onLogin}) {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [errors, setErrors] = useState([])

    function handleSubmit(event) {
        event.preventDefault()
        fetch("http://localhost:3000/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({username, password}),
        }).then((r) => {
            if (r.ok) {
                r.json().then((user) => onLogin(user))
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
                <input type="text" name="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                <br></br>
                <p>{errors}</p>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default LoginForm