import UserProfile from "./UserProfile"
import { useState } from "react"


function UserList({username, bio, status, avatar}) {
    const [showUserProfile, setShowUserProfile] = useState(false)

    console.log(avatar, "avatar")

    function handleClick() {
        setShowUserProfile((!showUserProfile))
    }

    return (
        <div>
            {!showUserProfile ?
            <div onClick={handleClick}>
            {username}

            </div>
            
                :
            <div onClick={handleClick} >
            {username}
            <UserProfile username={username} bio={bio} status={status} avatar={avatar && avatar.url} />  
            </div>
            }
        </div>
    )
}

export default UserList