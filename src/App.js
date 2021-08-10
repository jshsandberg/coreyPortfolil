import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import WelcomePage from "./pages/WelcomePage";
import HomePage from "./pages/HomePage"


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <WelcomePage />
        </Route>
        <Route exact path="/home">
          <HomePage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
