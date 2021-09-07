
import { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'

function EditProfile({user, onDelete, updateUserProfileState}) {
    const [image, setImage] = useState(user.profile.image)
    const [bio, setBio] = useState(user.profile.bio)
    const [status, setStatus] = useState(user.profile.status)
    const [profileUpdatedTextConfirmation, setProfileUpdatedTextConfirmation] = useState("")
    let history = useHistory()
    
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
        
        fetch(`/profiles/:id`, {
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
                setProfileUpdatedTextConfirmation("Profile Updated")
            } else {
                r.json().then((err) => console.log(err.exception))
            }
        })
    }
    

    return (
        <div>
            <Link to="/profile">
                <button  className="myButton" >
                back
                </button>
            </Link>
            <p>Username: {user.username}</p>
            <form onSubmit={handleSubmit}>
                <div className="">
                    <h1 access="false">Edit Profile</h1>
                </div>
                <div>
                    <label htmlFor="edit-image-url">Image Url:</label>
                    <br></br>
                    <input type="text" className="form-control" name="image" access="false" id="edit-image-url" placeholder={image} value={image} onChange={(e) => setImage(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="edit-bio">Bio:</label>
                    <br></br>
                    <textarea type="textarea" className="form-control" name="bio" access="false" maxLength="500" rows="10" id="edit-bio" placeholder={bio} value={bio} onChange={(e) => setBio(e.target.value)}></textarea>
                </div>
                <div>
                    <label htmlFor="edit-status">Status:</label>
                    <br></br>
                    <textarea type="textarea" className="form-control" name="status" access="false" maxLength="100" rows="5" id="edit-status" placeholder={status} value={status} onChange={(e) => setStatus(e.target.value)}></textarea>
                </div>
                <p>{profileUpdatedTextConfirmation}</p>
                <button className="myButton" >Submit</button>
            </form>
            <br></br>
            <button className="myButton"  onClick={handleDelete}>Delete Account</button>
        </div>
    )
}

export default EditProfile