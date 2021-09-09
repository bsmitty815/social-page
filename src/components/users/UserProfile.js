

function UserProfile({username, bio, status, image, avatar, hideUserProfile}) {
    
    function handleClick(){
        console.log("clicked")
        hideUserProfile()
    }

    return (
        <div>
            <p onClick={handleClick}>Close X</p>
            <h1 >Username: {username}</h1>

            <div>
            <img src={avatar} className="profile-image" alt={avatar} />
            </div>

            Bio: 
            <div className="field-container" >
                {bio}
            </div>
            Status: 
            <div className="field-container" >
                {status}
            </div>
            <img src={image} className="profile-image" alt={image} />
        </div>
    )
}

export default UserProfile