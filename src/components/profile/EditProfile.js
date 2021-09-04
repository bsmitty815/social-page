
import { useState } from 'react'
import { Link } from 'react-router-dom'

function EditProfile({user, onDelete, updateUserProfileState}) {
    const [image, setImage] = useState(user.profile.image)
    const [big, setBio] = useState(user.profile.bio)
    const [status, setStatus] = useState(user.profile.status)

    //state all fields
    //fetch patch profile
    //update state is app component
    //back button
    //setUser on delete
    //if i send back the user fromt he backend i may not have to update the user in a function and can just add the user to state

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
            <h1>edit user profile</h1>
            <Link to="/profile">
                <button>
                back
                </button>
            </Link>
            <p>Username: {user.username}</p>
            <form onSubmit={handleSubmit}>
                {/* <label htmlFor="old-password">Old Password: </label>
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
                <br></br> */}
                <button>Submit</button>
            </form>
            <br></br>
            <button onClick={handleDelete}>Delete Account</button>
        </div>
    )
}

export default EditProfile