import Home from './components/Home'
import './App.css';
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div>
      <Route path="/Home">
        <Home />
      </Route>

    </div>
  );
}

export default App;
