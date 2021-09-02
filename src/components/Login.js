import LoginForm from './LoginForm'
import SignupForm from './SignupForm'
import { Route} from "react-router-dom";
import Header from './Header'





function Login({onLogin}) {

    return (
        <div>
            <Header />

                <LoginForm onLogin={onLogin} />

            

                <SignupForm onLogin={onLogin} />

        </div>
    )
}

export default Login