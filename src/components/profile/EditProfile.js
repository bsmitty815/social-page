
import { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'

function EditProfile({user, onDelete, updateUserProfileState}) {
    const [image, setImage] = useState(user.profile.image)
    const [bio, setBio] = useState(user.profile.bio)
    const [status, setStatus] = useState(user.profile.status)
    const [profileUpdatedTextConfirmation, setProfileUpdatedTextConfirmation] = useState("")
    const [avatar, setAvatar] = useState("")
    let history = useHistory()
    
    //gets the current user
    function handleDelete() {
        fetch("/users/:id", {
            method: "DELETE",
        })
        .then((r) => console.log(r))
        onDelete(null)
        history.push("/goodbye")
    }

    //function to update the current users profile
    function handleSubmit(e) {
        e.preventDefault()
        
        const formData = new FormData()
        //if the avatar is empty its says the else so that it doesnt change in the back end
        if (avatar) {
            formData.append("image",image)
            formData.append("bio",bio)
            formData.append("status",status)
            formData.append("avatar",avatar)
        } else {
            formData.append("image",image)
            formData.append("bio",bio)
            formData.append("status",status)
        }
        //sends the data back to the backend
        fetch(`/profiles/:id`, {
            method: "PATCH",
            body: formData,
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
                <div>
                    <h1 access="false">Edit Profile</h1>
                </div>
                <div >
                    <label htmlFor="edit-image-url">Image Path:</label>
                    <br></br>
                    <input  type="text" className="form-control" name="image" access="false" id="edit-image-url" placeholder={image} value={image} onChange={(e) => setImage(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="edit-bio">Bio:</label>
                    <br></br>
                    <textarea type="textarea" className="form-control" name="bio" access="false" maxLength="500" rows="10" id="edit-bio" placeholder={bio} value={bio} onChange={(e) => setBio(e.target.value)}></textarea>
                    <br></br>
                    Maximum characters 1000
                </div>
                <div>
                    <label htmlFor="edit-status">Status:</label>
                    <br></br>
                    <textarea type="textarea" className="form-control" name="status" access="false" maxLength="100" rows="5" id="edit-status"  placeholder={status} value={status} onChange={(e) => setStatus(e.target.value)}></textarea>
                    <br></br>
                    Maximum characters 100
                </div>
                <div>
                <label htmlFor="edit-avatar" className="form-control">File Upload</label>
                <input type="file" className="form-control" name="avatar" access="false" id="avatar-upload" onChange={(e) => setAvatar(e.target.files[0])} />
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