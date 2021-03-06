import { useState } from "react"
import { Link } from "react-router-dom"

function EditPassword() {
    const [oldPassword, setOldPassword] = useState("")
    const [password, setPassword] = useState("")
    const [passwordConfirmation, setPasswordConfirmation] = useState("")
    const [errors, setErrors] = useState([])
    const [message, setMessage] = useState([])



    //function to update the password
    function handleSubmit(event) {

        event.preventDefault()
        //if there are any messages or errors to clear them out
        setErrors([])
        setMessage([])
        fetch("/users/:id", {
            method: "PATCH",
            headers: {
                "Accepts": "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                oldPass: {
                    oldPassword,
                },
                user: {
                    password,
                    password_confirmation: passwordConfirmation,
            }})
        })
        .then((r) => {
            if (r.ok) {
                setOldPassword("")
                setPassword("")
                setPasswordConfirmation("")
                r.json().then((data) => setMessage(data.message))
            } else {
                r.json().then((err) => setErrors(err.message))
            }
        })
        
    }



    return (
        <div>
            <Link to="/profile">
                <button className="myButton" >
                back
                </button>
            </Link>
            <h1>Edit Password</h1>

            <form onSubmit={handleSubmit}>
                <label htmlFor="old-password">Old Password: </label>
                <input type="password" name="old-password" id="old-password" autoComplete="on" value={oldPassword} onChange={(e) => setOldPassword(e.target.value)}/>
                <br></br>
                <label htmlFor="password">Password: </label>
                <input type="password" name="password" id="edit-password" autoComplete="on" value={password} onChange={(e) => setPassword(e.target.value)}/>
                <br></br>
                <label htmlFor="password confirmation">Password Confirmation: </label>
                <input type="password" name="password_confirmation" id="edit_password_confirmation" autoComplete="on" value={passwordConfirmation} onChange={(e) => setPasswordConfirmation(e.target.value)}/>
                <br></br>
                {errors}
                {message}
                <br></br>
                <button className="myButton" >Submit</button>
            </form>
            <br></br>
        </div>
    )
}

export default EditPassword