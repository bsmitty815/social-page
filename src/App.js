
import './App.css';
import FirstComponent from './FirstComponent'
import { Route, Switch } from "react-router-dom";
import Login from "./Login"
import Signup from "./Signup"
import { useState } from "react"

function App() {
  const [user, setUser] = useState(null)
  
  return (
    <div>
      <Switch>
        <Route >
>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
