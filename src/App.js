
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
import User from './components/users/User';


function App() {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)


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

  //loading icon use effect
  useEffect(() => {
    if (user) {
      setLoading(false) 
    }
  }, [user])

  //updating state for profile data once profile is edited
  function updateUserProfileState(updatedProfileData) {
    setUser(updatedProfileData)
  }
  

  
  return (
    <div className="App-Container">
      <Header />   
      <Switch>
        
        <Route exact path="/login">
          {user ? <Redirect to="/" /> : <Login onLogin={setUser}/>}
        </Route>
        <Route exact path="/profile">
          {!loading ? <Profile user={user} onLogout={setUser} setLoading={setLoading} /> : <Loading />}
        </Route>

        <Route exact path="/profile/edit_password">
          {user ? <EditPassword /> : <Redirect to="/" />}
        </Route>
        <Route exact path="/profile/edit_profile">
          {user ? <EditProfile onDelete={setUser} user={user} updateUserProfileState={updateUserProfileState} /> : <Redirect to="/" />}
        </Route>
        <Route exact path="/goodbye">
          <GoodBye />
        </Route>
        <Route exact path="/users">
          {user ? <User /> : <Redirect to="/" />}
        </Route>
        <Route path="/">
          {!loading ? <Profile user={user} onLogout={setUser} setLoading={setLoading}  /> : <Loading />}
        </Route>


      </Switch>
        
      
    </div>
  );
}

export default App;
