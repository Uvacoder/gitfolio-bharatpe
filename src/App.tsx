import { Route, Router, Switch } from "react-router-dom";
import Landing from "./screens/Landing/Landing";

import { createBrowserHistory } from "history";
import Navbar from "./shared/components/navbar";
import Profile from "./screens/Profile/Profile";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const history = createBrowserHistory();
  return (
    <Router history={history}>
      <>
        <ToastContainer />
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Landing />
          </Route>
          <Route exact path="/profile">
            <Profile />
          </Route>
        </Switch>
      </>
    </Router>
  );
}

export default App;
