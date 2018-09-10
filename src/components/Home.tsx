import * as React from "react";
import Footer from "./template/Footer";
import Header from "./template/Header";

export default class Home extends React.Component<{}> {
  public render() {
    return (
      <div>
        <Header />
        <main>
          <section id="section-apresentacao">
            <div className="imagem-apresentacao" />
            <span id="titulo-apresentacao">A beleza nunca foi tão natural</span>
          </section>
        </main>
        <Footer />
      </div>
    );
  }
}
