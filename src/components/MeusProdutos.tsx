import * as React from "react";
import Footer from "./template/Footer";
import Header from "./template/Header";

export default class MeusProdutos extends React.Component<{}> {
  public render() {
    return (
      <div>
        <Header />
        <main>
          <h1>Meus produtos</h1>
        </main>
        <Footer />
      </div>
    );
  }
}
