import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Portfolio from "./pages/Portfolio";
import Projects from "./pages/Projects";
import Games from "./pages/Games";
import Bio from "./pages/Bio";
import Contact from "./pages/Contact";
import NoMatch from "./pages/NoMatch";
import Footer from "./components/Footer";


const App = () =>
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={Portfolio} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/games" component={Games} />
        <Route exact path="/bio" component={Bio} />
        <Route exact path="/contact" component={Contact} />
        <Route component={NoMatch} />
      </Switch>
      <Footer />
    </div>
  </Router>;

export default App;
