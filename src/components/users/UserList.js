import UserProfile from "./UserProfile"
import { useState } from "react"


function UserList({username, id, bio, status, image, avatar}) {
    const [showUserProfile, setShowUserProfile] = useState(false)

    //click on a user
    

    return (
        <div>

            <div>
                {username}
                {id}
                {showUserProfile ? true : <UserProfile id={id} username={username} bio={bio} status={status} image={image} avatar={avatar} />}
            </div>
        </div>
    )
}

export default UserList