import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "./Header";
import SearchPage from "./SearchPage";
import AboutPage from "./About";

const App = () => (
  <Router>
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/search-hotels" component={SearchPage} />
        <Route exact path="/search-hotels/about" component={AboutPage} />
      </Switch>
    </div>
  </Router>
);

export default App;
