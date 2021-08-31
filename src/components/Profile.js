
function Profile({user, setUser}) {


    function handleLogout() {
        fetch("http://localhost:3000/logout", {
            method: "DELETE"
        }).then((r) => {
            if (r.ok) {
                setUser(null)
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