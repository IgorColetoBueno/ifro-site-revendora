import * as React from "react";
import Footer from "./template/Footer";
import Header from "./template/Header";

// Importação de imagens
import carrosselItem1 from "../assets/img/carrossel-home-1.jpeg";
import carrosselItem2 from "../assets/img/carrossel-home-2.jpeg";
import carrosselItem3 from "../assets/img/carrossel-home-3.jpeg";
import carrosselItem4 from "../assets/img/carrossel-home-4.jpeg";

import carrosselPeople1 from "../assets/img/carrossel-home-people-1.jpeg";
import carrosselPeople2 from "../assets/img/carrossel-home-people-2.jpeg";
import carrosselPeople3 from "../assets/img/carrossel-home-people-3.jpeg";
import carrosselPeople4 from "../assets/img/carrossel-home-people-4.jpeg";

export default class Home extends React.Component<{}> {
  public render() {
    return (
      <div>
        <Header />
        <main>
          <section id="home-apresentacao" className="section-apresentacao">
            <div className="apresentacao">
              <span className="titulo-apresentacao">
                <h1 className="big">Sua beleza nunca foi tão natural!</h1>
              </span>
            </div>
          </section>
          <section id="section-1" className="section-home-carrossel">
            <div className="carrossel-home">
              <div className="carrossel-home-titulo">
                <h2>Qual é a importância da beleza?</h2>
              </div>
              <img
                className="carrossel-home-item"
                src={carrosselItem1}
                alt="Buquê de flores junto a cosméticos em um fundo rosa"
              />
              <img
                className="carrossel-home-item"
                src={carrosselItem2}
                alt="Imagens de batons e maquiagens sobre um fundo branco"
              />
              <img
                className="carrossel-home-item"
                src={carrosselItem3}
                alt="Estojo de maquiagens"
              />
              <img
                className="carrossel-home-item"
                src={carrosselItem4}
                alt="Imagem de um batom sobre a mesa"
              />
            </div>
            <div className="paragrafo-descricao">
              <p>
                A beleza é uma força que nasce dentro de você, é sua
                autoconfiança em harmonia com seu jeito de ver o mundo! Viva sua
                beleza e compartilhe-a conosco!
              </p>
            </div>
          </section>
          <section className="section-home-carrossel">
            <div className="carrossel-home">
              <div className="carrossel-home-titulo">
                <h2>Quem são essas pessoas belas?</h2>
              </div>
              <img
                className="carrossel-home-item"
                src={carrosselPeople1}
                alt="Grupo de pessoas andando pela rua."
              />
              <img
                className="carrossel-home-item"
                src={carrosselPeople2}
                alt="Pessoas olhando o pôr-do-sol."
              />
              <img
                className="carrossel-home-item"
                src={carrosselPeople3}
                alt="Mulher com cabelos castanhos, ela está à frente de um fundo amarelo."
              />
              <img
                className="carrossel-home-item"
                src={carrosselPeople4}
                alt="Grupo de pessoas olhando para o nascer do sol."
              />
            </div>
            <div className="paragrafo-descricao">
              <p>
                São pessoas normais, assim como você. A semelhança entre elas está no otimisto e leveza ao verem o mundo!
              </p>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    );
  }
}
