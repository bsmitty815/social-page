import { Link } from "react-router-dom"



function GoodBye({onLogout, setLoading}) {

    onLogout(null)
    setLoading(true)
    return (
        <div>
            <strong>Have a good day!</strong>
            <p>
            <Link to="/login">
                Click to login or signup
            </Link>
            </p>
        </div>
    )
}

export default GoodBye