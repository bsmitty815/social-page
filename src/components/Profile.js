

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

    //   \n
    
   

   
    if (!user) return <Redirect to="/login" />


    
    //logic for bio to be seperate by line
    let userBio = Object.values(user.profile.bio)
    let newBio = userBio.join("").split("\n")
    const bioDisplay = newBio.map((bioStrings) => { 
        return <p>{bioStrings}</p>
    })


    return (
        <div className="App-Container">
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
            </div>
            <div>
                <h1>Username: {user.username}</h1>
                <p>Image: </p><img src={user.profile.image} />
                <p>Bio: </p>
                <p className="field-container">{bioDisplay}</p>
                <p>Status: </p>
                <p className="field-container">"{user.profile.status}" -{user.username}</p>
                
            </div>

            
            
            

            
        </div>
    )
}

export default Profile