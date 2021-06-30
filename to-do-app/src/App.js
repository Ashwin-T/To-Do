import Todo from './Components/Todo/Todo.js';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <div className="page">
          <Switch>

            <Route exact path="/">
              <Todo/>
            </Route>


          </Switch>          
        </div>
      </Router>
    </div>
  );
}

export default App;
