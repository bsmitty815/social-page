import LoginForm from './LoginForm'
import SignupForm from './SignupForm'
import { Route} from "react-router-dom";
import Header from './Header'





function Login({onLogin}) {

    return (
        <div>
            <Header />
            <Route>
                <LoginForm onLogin={onLogin} />
            </Route>
            
            <Route>
                <SignupForm onLogin={onLogin} />
            </Route>
        </div>
    )
}

export default Login