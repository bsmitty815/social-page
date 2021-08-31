import { useState } from 'react'

function SignupForm({onLogin}) {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [passwordConfirmation, setPasswordConfirmation] = useState("")
    const [image, setImage] = useState("")
    const [errors, setErrors] = useState([])
    console.log(username, password, passwordConfirmation,image)

    function handleSubmit(event) {
        event.preventDefault()
        fetch("http://localhost:3000/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username,
                password,
                password_confirmation: passwordConfirmation,
                image,
            }),
        }).then((r) => {
            if (r.ok) {
                r.json().then((user) => console.log(user))
            } else {
                r.json().then((err) => console.log(err.errors))
            }
        })
    }
    return (
        <div>
            <h1>Signup</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username: </label>
                <input type="text" name="username" id="username" value={username} onChange={(e) => setUsername(e.target.value)}/>
                <br></br>
                <label htmlFor="Password">Password: </label>
                <input type="text" name="Password" id="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                <br></br>
                <label htmlFor="Password Confirmation">Password Confirmation: </label>
                <input type="text" name="password_confirmation" id="password_confirmation" value={passwordConfirmation} onChange={(e) => setPasswordConfirmation(e.target.value)}/>
                <br></br>
                <label htmlFor="image">Image: </label>
                <input type="text" name="image" id="image" value={image} onChange={(e) => setImage(e.target.value)}/>
                <br></br>
                <p key={errors}>{errors}</p>
                <button>Submit</button>
            </form>
   

            
        </div>
    )
}

export default SignupForm