import * as React from "react";
import Footer from "./template/Footer";
import Header from "./template/Header";

export default class QuemSomos extends React.Component<{}> {
  public render() {
    return (
      <div>
        <Header />
        <main>
          <section
            id="quem-somos-apresentacao"
            className="section-apresentacao"
          >
            <div className="apresentacao">
              <span className="titulo-apresentacao">
                <h1 className="big">Quem somos</h1>
              </span>
            </div>
          </section>
          <section id="quem-somos-banner">
            <h2>Minha revendedora</h2>
            <img id="imagem-quem-somos" alt="Foto de 5 pessoas desenhando estrelas com as mãos"/>
          </section>
          <section id="quem-somos-descricao" className="paragrafo-descricao">
            <p>A Minha revendedora nasceu com o desejo de ajudar as pessoas a descobrirem a própria beleza.
            Nós estamos no mercado há 6 anos e já atendemos a mais de 5000 clientes em toda região norte!</p>
          </section>
        </main>
        <Footer />
      </div>
    );
  }
}
