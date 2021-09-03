import LoginForm from './LoginForm'
import SignupForm from './SignupForm'
import Header from '../Header'





function Login({onLogin}) {

    return (
        <div>
            <LoginForm onLogin={onLogin} />
            <SignupForm onLogin={onLogin} />
        </div>
    )
}

export default Login