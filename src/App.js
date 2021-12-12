import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Component
import Homepage from './Pages/Homepage';

function App() {
  return (
    <Router>
        <Switch>
            <Route path="/" component={Homepage} exact={true} />
        </Switch>
    </Router>
  );
}

export default App;
