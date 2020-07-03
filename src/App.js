import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import { HomePage } from "./pages/homepage/homepage.component";

const VegetablesPage = () => (
  <div>
    <h1>Vegetables Page</h1>
  </div>
);
function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/vegetables" component={VegetablesPage} />
      </Switch>
    </div>
  );
}

export default App;
