import { Redirect, Route, Switch, useLocation } from "react-router";
import Home from "./pages/Home";

function App() {

  const location = useLocation();

  return (
    <Switch location={location} key={location.pathname}>
      <Route exact path="/" component={Home} />
      <Redirect to="/" />
    </Switch>
  );
}

export default App;
