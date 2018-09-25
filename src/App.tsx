import * as React from "react";
import { Route, Switch } from "react-router";
import "./assets/css/app.css";
import Contato from "./components/Contato";
import Home from './components/Home';
import MeusProdutos from "./components/MeusProdutos";
import QuemSomos from "./components/QuemSomos";

class App extends React.Component {
  public render() {
    return (
      <Switch>
        <Route exact={true} path="/" component={Home}/>
        <Route exact={true} path="/QuemSomos" component={QuemSomos}/>
        <Route exact={true} path="/MeusProdutos" component={MeusProdutos}/>
        <Route exact={true} path="/Contato" component={Contato}/>
      </Switch>
    );
  }
}

export default App;
