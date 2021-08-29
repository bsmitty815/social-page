import FirstComponent from './components/FirstComponent'
import './App.css';
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div>
      <Route>
        <FirstComponent />
      </Route>

    </div>
  );
}

export default App;
