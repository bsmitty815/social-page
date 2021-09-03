import { Link } from "react-router-dom"
import { useEffect } from "react"


function GoodBye({onLogout, setLoading}) {

    useEffect(() => {
        onLogout(null)
        setLoading(true)
    }, [])

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