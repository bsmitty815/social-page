

import { Link, useHistory, Redirect } from "react-router-dom"

function Profile({user, onLogout, setLoading}) {
   
    let history = useHistory();


    function handleLogout() {
        fetch("/logout", {
            method: "DELETE"
        }).then((r) => {
            if (r.ok) {
                onLogout(null)
                setLoading(true)
                history.push("/goodbye")
            }
        })
    }

    //   \n
    
   

   
    if (!user) return <Redirect to="/login" />


    //console.log(Object.values(user.profile.bio))
    //logic for bio to be seperate by line
    let userBio = Object.values(user.profile.bio)
    let newBio = userBio.join("").split("\n")
    const bioDisplay = newBio.map((bioStrings, index) => { 
        return <p key={index}>{bioStrings}</p>
    })


    return (
        <div>
            <div>
            <button className="myButton"  onClick={handleLogout}>Logout</button>

            <Link to="/profile/edit_password">
                <button  className="myButton" >
                Edit Password
                </button>
            </Link>
            <Link to="/profile/edit_profile">
                <button  className="myButton" >
                Edit Profile
                </button>
            </Link>
            <Link to="/users">
                <button  className="myButton" >
                Users
                </button>
            </Link>
            </div>

            <h1 >Username: {user.username}</h1>

            <div>
            <img src={user.profile.avatar.url} className="profile-image" alt={user.profile.avatar.url} />
            </div>
            
            Bio: 
            <div className="field-container" >
                {bioDisplay}
            </div>
            Status: 
            <div className="field-container" >
                {user.profile.status}
            </div>
            <img src={user.image} className="profile-image" alt={user.profile.image} />
        </div>
    )
}

export default Profile