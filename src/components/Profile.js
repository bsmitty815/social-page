

import { Link, useHistory, Redirect } from "react-router-dom"

function Profile({user}) {

    let history = useHistory();


    function handleLogout() {
        fetch("/logout", {
            method: "DELETE"
        }).then((r) => {
            if (r.ok) {
                history.push("/goodbye")
            }
        })
    }

   
    if (!user) return <Redirect to="/login" />

    return (
        <div>
            <div>
            <button onClick={handleLogout}>Logout</button>

            <Link to="/profile/edit_password">
                <button>
                Edit Password
                </button>
            </Link>
            <Link to="/profile/edit_profile">
                <button>
                Edit Profile
                </button>
            </Link>
            </div>
            <div>
                <h1>Username: {user.username}</h1>
                <p>Image: {user.profile.image}</p>
                <p>Bio: {user.profile.bio}</p>
                <p>Status: {user.profile.status}</p>
            </div>

            
            
            

            
        </div>
    )
}

export default Profile