
import { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'

function EditProfile({user, onDelete, updateUserProfileState}) {
    const [image, setImage] = useState(user.profile.image)
    const [bio, setBio] = useState(user.profile.bio)
    const [status, setStatus] = useState(user.profile.status)
    let history = useHistory()
    console.log(image)
    console.log(bio)
    console.log(status)

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
        history.push("/goodbye")
    }

    function handleSubmit(e) {
        e.preventDefault()
        fetch("/profiles/:id", {
            method: "PATCH",
            headers: {
                "Accepts": "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                profile: {
                    image,
                    bio,
                    status,
                }
            })
        })
        .then((r) => {
            if (r.ok) {
                r.json().then((data) => updateUserProfileState(data))
            } else {
                r.json().then((err) => console.log(err.exception))
            }
        })
    }
    

    return (
        <div>
            <h1>edit user profile</h1>
            <Link to="/profile">
                <button  className="myButton" >
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
                <div class="">
                    <h1 access="false">Edit Profile</h1>
                </div>
                <div>
                    <label htmlFor="edit-image-url">Image Url</label>
                    <input type="text" class="form-control" name="image" access="false" id="edit-image-url" placeholder={image} value={image} onChange={(e) => setImage(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="edit-bio">Bio</label>
                    <textarea type="textarea" class="form-control" name="bio" access="false" maxLength="500" rows="10" id="edit-bio" placeholder={bio} value={bio} onChange={(e) => setBio(e.target.value)}></textarea>
                </div>
                <div>
                    <label htmlFor="edit-status">Status</label>
                    <textarea type="textarea" class="form-control" name="status" access="false" maxLength="100" rows="5" id="edit-status" placeholder={status} value={status} onChange={(e) => setStatus(e.target.value)}></textarea>
                </div>
                <button className="myButton" >Submit</button>
            </form>
            <br></br>
            <button className="myButton"  onClick={handleDelete}>Delete Account</button>
        </div>
    )
}

export default EditProfile