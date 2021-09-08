

function UserProfile({username, id, bio, status, image, avatar}) {
    


    
    return (
        <div>
            <h1 >Username: {username}</h1>

            <div>
            <img src={avatar.url} className="profile-image" alt={avatar.url} />
            </div>

            Bio: 
            <div className="field-container" >
                {bio}
            </div>
            Status: 
            <div className="field-container" >
                {status}
            </div>
            <img src={image} />
        </div>
    )
}

export default UserProfile