
import './App.css';
import { Route, Switch} from "react-router-dom";
import Login from "./components/Login"
import { useState, useEffect } from "react"
import Profile from "./components/Profile"
import Header from './components/Header'

function App() {
  const [user, setUser] = useState(null)
  console.log(user)

  //auto login
  useEffect(() => {
    fetch("localhost.com/3000/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user))
      }
    })
  }, [])


  
  if (!user) return <Login onLogin={setUser}/>
  
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/Profile">
          <Profile />
        </Route>
        <Route path="/">
          <Profile />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
