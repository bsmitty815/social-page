import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import UserList from './UserList'


function User() {
    const [usersInfo, setUsersInfo] = useState([])
    const [usersProfiles, setUsersProfiles] = useState([])
    //console.log(usersProfiles, "up")
    useEffect(() => {
        fetch("/users").then((r) => {
            if (r.ok) {
                r.json().then((data) => setUsersInfo(data))
            }
        })
    }, []) 

    useEffect(() => {
        fetch("/profiles").then((r) => {
            if (r.ok) {
                r.json().then((data) => setUsersProfiles(data))
            }
        })
    }, []) 
    //console.log(usersInfo)

    //const testDisplay = usersInfo.map((user) => user.profile).map((profData) => profData.avatar).map((avatarData) => avatarData)
    //console.log(testDisplay, "testDisplay")
    // const usersNameDisplay = usersInfo.map((user) => {
    //     return <div key={user.id}><UserList key={user.id} user={user} {...user} /></div>
    // })
    const mapProfileDisplay = usersProfiles.map((data) => {
        return <div><UserList username={data.user.username} bio={data.bio} status={data.status} avatar={data.avatar}/></div>
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