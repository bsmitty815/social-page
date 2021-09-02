import EditUser from "./EditUser"
import { Link, useHistory, Route, useRouteMatch } from "react-router-dom"
function Profile({user, onLogout}) {
    let history = useHistory();
    let match = useRouteMatch();

    function handleLogout() {
        fetch("/logout", {
            method: "DELETE"
        }).then((r) => {
            if (r.ok) {
                onLogout(null)
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
            
            <Link to={`${match.url}/EditUser`}>edit user match</Link>
            <Link to="/EditUser">Edit User</Link>
            
            
            <button type="button" onClick={handleEditUser}>Edit User</button>
            
            test profile
            <Route path="/EditUser">
                <EditUser />
            </Route>
            
        </div>
    )
}

export default Profile