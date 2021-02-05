import Navbar from "./components/Navbar/Navbar";
import Formp from "./components/Form/Formp";
import Log from "./components/Log/Log";
import News from "./components/News/News";
import { BrowserRouter, Route, Switch } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Navbar />
          <Formp />
        </Route>
        <Route path="/Log">
        <Navbar />
          <Log />
        </Route>
        <Route path="/news">
        <Navbar />
          <News />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
