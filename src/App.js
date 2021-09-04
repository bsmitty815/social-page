
import './App.css';
import { Route, Switch, Redirect} from "react-router-dom";
import Login from "./components/auth/Login"
import { useState, useEffect } from "react"
import Profile from "./components/Profile"
import Header from './components/Header'
import EditPassword from './components/profile/EditPassword'
import EditProfile from './components/profile/EditProfile'
import Loading from './components/loading/Loading'
import GoodBye from './components/auth/GoodBye'

function App() {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  console.log("loading",loading)
  console.log(user)

  //auto login
  useEffect(() => {
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user))
        setLoading(false)
      } else {
        setLoading(false)
      }

    })
  }, [])

  //loading 
  // useEffect(() => {
  //   console.log("loading",loading)
  //   if (user) {
  //     setLoading(false)
      
  //   }
  // }, [user])

  function updateUserProfileState() {

  }
  

  
  return (
    <div>
      <Header />   
      <Switch>
        
        <Route exact path="/login">
          {user ? <Redirect to="/" /> : <Login onLogin={setUser}/>}
        </Route>
        <Route exact path="/profile">
          {!loading ? <Profile user={user}/> : <Loading />}
        </Route>

        <Route exact path="/profile/edit_password">
          {user ? <EditPassword onDelete={setUser} /> : <Redirect to="/" />}
        </Route>
        <Route exact path="/profile/edit_profile">
          {user ? <EditProfile onDelete={setUser} user={user} updateUserProfileState={updateUserProfileState} /> : <Redirect to="/" />}
        </Route>
        <Route exact path="/goodbye">
          <GoodBye  onLogout={setUser} setLoading={setLoading}  />
        </Route>
        <Route path="/">
          {!loading ? <Profile user={user} /> : <Loading />}
        </Route>


      </Switch>
        
      
    </div>
  );
}

export default App;
