import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import SideNavbarCollapse from "./SideNavbarCollapse";
import CarouselExample from "./pages/CarouselExample";
import Option1 from "./pages/Option1";
import Option2 from "./pages/Option2";
import Home from "./pages/Home";

// Add Bootlaterus Styles
import 'bootlaterus/dist/css/bootlaterus-cfonts.min.css';

function App() {
  return (
    <Router>
      <SideNavbarCollapse />
      <div className="m-navbar-side-left-sm">
        <div className="container">
          <Switch>
            <Route path="/carousel">
              <CarouselExample />
            </Route>
            <Route path="/option1">
              <Option1 />
            </Route>
            <Route path="/option2">
              <Option2 />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
