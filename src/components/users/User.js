import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import UserList from './UserList'


function User({hideUserProfile}) {

    const [usersProfiles, setUsersProfiles] = useState([])
    const [searchTerm, setSearchTerm] = useState([])
    
    //gets all the users profiles
    useEffect(() => {
        fetch("/profiles").then((r) => {
            if (r.ok) {
                r.json().then((data) => setUsersProfiles(data))
            }
        })
    }, []) 

    //filters through the users and uses the search term inputted then displays them on the page
    const mapProfileDisplay = usersProfiles.filter((data) => data.user.username.toLowerCase().includes(searchTerm.toLowerCase())).map((data) => {
        return <div key={data.user.username} ><UserList username={data.user.username} bio={data.bio} status={data.status} avatar={data.avatar} image={data.image} hideUserProfile={hideUserProfile} /></div>
    })
    
    return (
        <div>
            <Link to="/profile">
                <button  className="myButton" >
                Back
                </button>
            </Link>
            <div className="search-bar">
            <input type="text" name="username" id="search-username" placeholder="search user" value={searchTerm}  onChange={(e) => setSearchTerm(e.target.value)} />
            </div>

            <div>
                {mapProfileDisplay}
            </div>
        </div>
    )
}

export default User