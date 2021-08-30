import { useState } from 'react'

function SignupForm() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [passwordConfirmation, setPasswordConfirmation] = useState("")
    const [image, setImage] = useState("")
    return (
        <div>
            <h1>Signup</h1>
            <form>
                <label for="username">Username: </label>
                <input type="text" name="username" id="username" />
                <br></br>
                <label for="Password">Password: </label>
                <input type="text" name="Password" id="Password" />
                <br></br>
                <label for="Password Confirmation">Password Confirmation: </label>
                <input type="text" name="password-confirmation" id="password-confirmation" />
                <br></br>
                <label for="image">Image: </label>
                <input type="text" name="image" id="image" />
                <br></br>
                <button>Submit</button>
            </form>
   

            
        </div>
    )
}

export default SignupForm