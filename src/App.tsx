import * as React from "react";
import { Redirect, Route, Switch } from "react-router";
import "./assets/css/app.css";
import Contato from "./components/Contato";
import Home from './components/Home';
import QuemSomos from "./components/QuemSomos";

class App extends React.Component {
  public render() {
    return (
      <Switch>
        <Route exact={true} path="/" component={Home}/>
        <Route exact={true} path="/QuemSomos" component={QuemSomos}/>
        <Route exact={true} path="/Contato" component={Contato}/>
        <Redirect to='/'/>
      </Switch>
    );
  }
}

export default App;
