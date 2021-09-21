

import { Link, useHistory, Redirect } from "react-router-dom"


function Profile({user, onLogout, setLoading}) {
   
    let history = useHistory();
    


    // log current user out
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

    
   
    // if the user its not signed in redirect them to the login page
    if (!user) return <Redirect to="/login" />


    //function to display the bio if there are also spaces in between the sentences
    let userBio = Object.values(user.profile.bio)
    let newBio = userBio.join("").split("\n")
    const bioDisplay = newBio.map((bioStrings, index) => { 
        return <p key={index}>{bioStrings}</p>
    })


    //callback function for button clicked
    //create function
    //button says garfield
    //once clicked puts i hate mondays but love lasagna on the page
    function garfieldButton() {
        console.log("clicked garfield button")
        
        //onLongout
        fetch('/profiles/:id', {
            method: 'PATCH',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                status: "I hate mondays but love lasagna"
            })
        })
        .then((r) => {
            if (r.ok) {
                r.json().then((data) => onLogout(data))
            }
        })
    }




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
            <img src={user.profile.avatar && user.profile.avatar.url} className="profile-avatar" alt={user.profile.avatar && user.profile.avatar.url} />
            </div>
            
            Bio: 
            <div className="field-container" >
                {bioDisplay}
            </div>
            Status: 
            <div className="field-container" >
                {user.profile.status}
            </div>
            <img src={user.profile.image} className="profile-image" alt={user.profile.image} />
            <button onClick={garfieldButton}>Garfield</button>

        </div>
    )
}

export default Profile