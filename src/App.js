import { Redirect, Route, Switch, useLocation } from "react-router";
import Home from "./pages/Home";
import UserHall from "./pages/UserHall";

function App() {

  const location = useLocation();

  return (
    <Switch location={location} key={location.pathname}>
      <Route exact path="/" component={Home} />
      <Route exact path="/user-hall" component={UserHall}/>
      <Redirect to="/" />
    </Switch>
  );
}

export default App;
