
import { Link, useHistory, useRouteMatch } from "react-router-dom"
function Profile({user, onLogout}) {
    let history = useHistory();
    let match = useRouteMatch();

    function handleLogout() {
        fetch("/logout", {
            method: "DELETE"
        }).then((r) => {
            if (r.ok) {
                onLogout(null)
                history.push("/login")
            }
        })
    }

    function handleEditUser() {
       // history.push('/EditUser')
    }
    // <button onClick={() => history.push('/EditUser')}>Click button to EditUser</button>


    return (
        <div>
            
            <button onClick={handleLogout}>Logout</button>

            <Link to="/profile/edit">Edit User</Link>
            
            <button type="button" onClick={handleEditUser}>Edit User</button>
            
            test profile

            
        </div>
    )
}

export default Profile