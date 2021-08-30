import { useState } from "react"
function LoginForm({onLogin}) {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    return (
        <div>
            <h1>Login</h1>
            <form>
                <label for="username">Username: </label>
                <input type="text" name="username" id="username" />
                <br></br>
                <label for="password">Password: </label>
                <input type="text" name="password" id="password" />
                <br></br>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default LoginForm