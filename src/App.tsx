import * as React from "react";
import { Route, Switch } from "react-router";
import "./assets/css/app.css";
import Home from './components/Home';
import Home1 from './components/Home.1';
import './server/index';

class App extends React.Component {
  public render() {
    return (
      <Switch>
        <Route exact={true} path="/" component={Home}/>
        <Route exact={true} path="/1" component={Home1}/>
      </Switch>
    );
  }
}

export default App;
