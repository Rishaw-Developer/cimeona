import React from "react";
import Home from "./Screens/Home";
import AddPost from "./components/AddPost"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/addpost" exact>
            <AddPost />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

// firebase deploy --only hosting:cimeona
