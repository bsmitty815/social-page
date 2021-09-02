
import './App.css';
import { Route, Switch, Redirect} from "react-router-dom";
import Login from "./components/Login"
import { useState, useEffect } from "react"
import Profile from "./components/Profile"
import Header from './components/Header'
import EditUser from './components/EditUser'

function App() {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  console.log(user, "user")
  console.log(loading, "loading")
  //loading 
  //auto login
  useEffect(() => {
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user))
        
      } 
    })
  }, [])

  useEffect(() => {
    if (user) {
      setLoading(false)
    }
  }, [user])
  

  //if (!user) return <Login onLogin={setUser}/>
  
  return (
    <div>
      <Header />
      <Switch>
        
        {/*
        <Route exact path="/Profile">
          <Profile user={user} onLogout={setUser} />
        </Route>
         */}

        <Route exact path="/">
          {!loading ? <Profile user={user} onLogout={setUser} /> : "loading"}
        </Route>
        <Route exact path="/login">
          {user ? <Redirect to="/" /> : <Login onLogin={setUser}/>}
        </Route>

        <Route exact path="/profile/edit">
          <EditUser onDelete={setUser} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
