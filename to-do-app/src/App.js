import MainPage from './Components/MainPage';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";



const App = () =>{
 

  return (
    <div className="App">
      <Router>
        <div className="page">
          <Switch>

            <Route exact path="/">
              <MainPage/>
            </Route>


          </Switch>          
        </div>
      </Router>
    </div>
  );
}

export default App;
