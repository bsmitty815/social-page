import UserProfile from "./UserProfile"
import { useState } from "react"


function UserList({username, bio, status, avatar, image}) {
    const [showUserProfile, setShowUserProfile] = useState(false)



    function handleClick() {
        setShowUserProfile((!showUserProfile))
    }

    return (
        <div >
            {!showUserProfile ?
            <div onClick={handleClick}>
            {username}

            </div>
            
                :
            <div onClick={handleClick} >
            {username}
            <UserProfile username={username} bio={bio} status={status} image={image} avatar={avatar && avatar.url} hideUserProfile={handleClick}/>  
            </div>
            }
        </div>
    )
}

export default UserList