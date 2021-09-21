import Header from "../Header"


function UserProfile({username, bio, status, image, avatar, hideUserProfile}) {
    
    //calls the function to rehide the users profile that was currently clicked
    function handleClick(){
        hideUserProfile()
    }



    return (
        <div className="modal-display">
        
        <div className="modal-display-inner">
            <Header />
            <button onClick={handleClick} className="myButton" >
            Back
            </button>
            <h1 >Username: {username}</h1>

            <div>
            <img src={avatar} className="profile-avatar" alt={avatar} />
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
        </div>

    )
}

export default UserProfile