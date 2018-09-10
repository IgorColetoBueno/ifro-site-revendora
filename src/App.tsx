import * as React from "react";
import { Route, Switch } from "react-router";
import "./assets/css/app.css";
import Home from './components/Home';

class App extends React.Component {
  public render() {
    return (
      <Switch>
        <Route exact={true} path="/" component={Home}/>
      </Switch>
    );
  }
}

export default App;
