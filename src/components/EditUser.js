import { useState} from "react"
import { useHistory } from "react-router-dom"

function EditUser({onDelete}) {
    const [oldPassword, setOldPassword] = useState("")
    const [password, setPassword] = useState("")
    const [passwordConfirmation, setPasswordConfirmation] = useState("")
    const [errors, setErrors] = useState([])
    let history = useHistory()
    console.log(oldPassword, password, passwordConfirmation)

    //would you send through old password to confirm
    function handleSubmit(event) {
        event.preventDefault()
        fetch("/users/:id", {
            method: "PATCH",
            headers: {
                "Accepts": "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({user: {
                oldPassword,
                password,
                passwordConfirmation: passwordConfirmation,
            }})
        })
        .then((r) => {
            if (r.ok) {
                //r.json().then((user) => onLogin(user))
                setOldPassword("")
                setPassword("")
                setPasswordConfirmation("")
                //history.push("/profile")
            } else {
                r.json().then((err) => console.log(err))
            }
        })
        
    }

    function handleDelete() {
        fetch("/users/:id", {
            method: "DELETE",
        })
        .then((r) => console.log(r))
        onDelete(null)
        history.push("/login")
    }


    return (
        <div>
            
            <h1>edit user page</h1>
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
                {errors.length > 0 ? errors.map((error) => {
                    return <p key ={error}>{error}</p>
                }) : null}
                
                <button>Submit</button>
            </form>
            <br></br>
            <button onClick={handleDelete}>Delete Account</button>
        </div>
    )
}

export default EditUser