
import { Link, useHistory, useRouteMatch } from "react-router-dom"
function Profile({user, onLogout}) {
    console.log("profile", user)
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


    return (
        <div>
            
            <button onClick={handleLogout}>Logout</button>

            <Link to="/profile/edit">
                <button>
                Edit User
                </button>
            </Link>
            
            
            
            test profile

            
        </div>
    )
}

export default Profile