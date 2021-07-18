import React from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path = "/user"><div>Home</div></Route>
      </Switch>
      
    </BrowserRouter>
  );
}

export default App;
