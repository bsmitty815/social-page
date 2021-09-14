import { Link } from "react-router-dom"



function GoodBye() {

    //page displayed when a user logs out
    return (
        <div className="Goodbye-Container">
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