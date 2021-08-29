import SecondComponent from './components/SecondComponent'
import './App.css';
import { Route} from "react-router-dom";

function App() {
  return (
    <div>
      <Route path="/Home/SecondComponent">
        <SecondComponent />
      </Route>

    </div>
  );
}

export default App;
