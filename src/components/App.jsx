import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import SearchPage from "./SearchPage";
import AboutPage from "./About";

const App = () => (
  <Router>
    <div className="App">
      <ul className="App-left-navi">
        <li>
          <Link to="/search-hotels">ホテル検索</Link>
        </li>
        <li>
          <Link to="/search-hotels/about">About</Link>
        </li>
      </ul>
      <Switch>
        <Route exact path="/search-hotels" component={SearchPage} />
        <Route exact path="/search-hotels/about" component={AboutPage} />
      </Switch>
    </div>
  </Router>
);

export default App;
