import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import UserList from './UserList'


function User({hideUserProfile}) {

    const [usersProfiles, setUsersProfiles] = useState([])



    useEffect(() => {
        fetch("/profiles").then((r) => {
            if (r.ok) {
                r.json().then((data) => setUsersProfiles(data))
            }
        })
    }, []) 

    const mapProfileDisplay = usersProfiles.map((data) => {
        return <div key={data.user.username} ><UserList username={data.user.username} bio={data.bio} status={data.status} avatar={data.avatar} image={data.image} hideUserProfile={hideUserProfile} /></div>
    })
    
    return (
        <div>
            <Link to="/profile">
                <button  className="myButton" >
                Back
                </button>
            </Link>

            <div>
                {mapProfileDisplay}
            </div>
        </div>
    )
}

export default User