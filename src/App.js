import Home from "./components/Home";
import About from "./components/About";
import NavBar from "./components/Navbar";
import Albums from "./components/Albums";
import Contact from "./components/Contact";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Beats from "./components/Beats";
import Radio from "./components/Radio";

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/radio">
            <Radio />
          </Route>
          <Route exact path="/beats">
            <Beats />
          </Route>
          <Route exact path="/albums">
            <Albums />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
