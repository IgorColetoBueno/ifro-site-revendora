import * as React from "react";
import Footer from "./template/Footer";
import Header from "./template/Header";

// Importação de imagens
import carrosselItem1 from "../assets/img/carrossel-home-1.jpeg";
import carrosselItem2 from "../assets/img/carrossel-home-2.jpeg";
import carrosselItem3 from "../assets/img/carrossel-home-3.jpeg";
import carrosselItem4 from "../assets/img/carrossel-home-4.jpeg";

export default class Home extends React.Component<{}> {
  public render() {
    return (
      <div>
        <Header />
        <main>
          <section id="section-apresentacao">
            <div className="apresentacao">
              <span id="titulo-apresentacao">
                <h1>Sua beleza nunca foi tão natural!</h1>
              </span>
            </div>
          </section>
          <section className="carrossel-home">
            <div className="carrossel-home-titulo">
              <h2>Qual é a importância da beleza?</h2>
            </div>
            <img
              width="640"
              height="640"
              className="carrossel-home-item"
              src={carrosselItem1}
              alt=""
            />
            <img
              width="640"
              height="420"
              className="carrossel-home-item"
              src={carrosselItem2}
              alt=""
            />
            <img
              width="640"
              height="420"
              className="carrossel-home-item"
              src={carrosselItem3}
              alt=""
            />
            <img
              width="640"
              height="420"
              className="carrossel-home-item"
              src={carrosselItem4}
              alt=""
            />
          </section>
        </main>
        <Footer />
      </div>
    );
  }
}
