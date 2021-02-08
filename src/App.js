import Navbar from "./components/Navbar/Navbar";
import Formp from "./components/Form/Formp";
import Log from "./components/Log/Log";
import News from "./components/News/News";
import { BrowserRouter, Route, Switch,useLocation,NavLink } from "react-router-dom";
function App() {
  const location = useLocation();
  console.log(location.pathname);
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Navbar status="form"/>
          <Formp />
        </Route>
        <Route path="/Log">
        <Navbar status="log"/>
          <Log />
        </Route>
        <Route path="/news">
        <Navbar status="news" />
          <News />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
