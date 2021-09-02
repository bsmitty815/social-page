import EditUser from "./EditUser"

function Profile({user, onLogout}) {


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

    }

    return (
        <div>
            <button onClick={handleLogout}>Logout</button>
            <button onClick={handleEditUser}>Edit User</button>
            test profile
        </div>
    )
}

export default Profile