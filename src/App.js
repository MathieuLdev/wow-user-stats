import { Redirect, Route, Switch, useLocation } from "react-router";
import Mythic from "./pages/Mythic";
import Raid from "./pages/Raid";
import Pvp from "./pages/Pvp";
import Statistics from "./pages/Statistics";
import Home from "./pages/Home";
import UserHall from "./pages/UserHall";

function App() {

  const location = useLocation();

  return (
    <Switch location={location} key={location.pathname}>
      <Route exact path="/" component={Home} />
      <Route exact path="/user-hall" component={UserHall} />
      <Route exact path="/user-hall/mythic" component={Mythic} />
      <Route exact path="/user-hall/raid" component={Raid} />
      <Route exact path="/user-hall/pvp" component={Pvp} />
      <Route exact path="/user-hall/statistics" component={Statistics} />
      <Redirect to="/" />
    </Switch>
  );
}

export default App;
