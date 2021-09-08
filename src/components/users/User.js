import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import UserList from './UserList'


function User() {
    const [usersInfo, setUsersInfo] = useState([])
    
    useEffect(() => {
        fetch("/users").then((r) => {
            if (r.ok) {
                r.json().then((data) => setUsersInfo(data))
            }
        })
    }, []) 


    const usersNameDisplay = usersInfo.map((user) => {
        return <div key={user.id}><UserList key={user.id} user={user.id} {...user} /></div>
    })
    
    return (
        <div>
            <Link to="/profile">
                <button  className="myButton" >
                Back
                </button>
            </Link>

            <div>
                {usersNameDisplay}
            </div>
        </div>
    )
}

export default User