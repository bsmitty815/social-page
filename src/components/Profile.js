
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

    return (
        <div>
            <button onClick={handleLogout}>Logout</button>
            test profile
        </div>
    )
}

export default Profile