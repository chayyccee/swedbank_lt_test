import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// hooks
import { useDesktopMedia } from "./Hooks/ResponsiveHook";

// Component
import Homepage from './Pages/Homepage';
import StepForm from "./Components/StepForm/StepForm";

function App() {

  const desktopDevice = useDesktopMedia();

  return (
    <Router>
        <Switch>
            <Route path="/" component={Homepage} exact={true} />
            {!desktopDevice && <Route path="/application-form" component={StepForm} exact={true} />}
        </Switch>
    </Router>
  );
}

export default App;
