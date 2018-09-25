import * as React from "react";
import Footer from "./template/Footer";
import Header from "./template/Header";

export default class Contato extends React.Component<{}> {
  public render() {
    return (
      <div>
        <Header />
        <main>
          <section id="contato-apresentacao" className="section-apresentacao">
            <div className="apresentacao">
              <span className="titulo-apresentacao">
                <h1 className="big">Contato</h1>
              </span>
            </div>
          </section>
          <div id="subtitulo">
            <h2>Entre em contato conosco!</h2>
          </div>
          <section id="formulario-contato">
            <form>
              <fieldset className="form-group">
                <label htmlFor="nome">Nome Completo</label>
                <input required={true} type="text" name="nome" />
              </fieldset>
              <fieldset className="form-group">
                <label htmlFor="descricao">Descrição</label>
                <input required={true} type="text" name="descricao" />
              </fieldset>
              <fieldset className="form-group">
                <label htmlFor="email">E-mail</label>
                <input required={true} type="email" name="email" />
              </fieldset>
            </form>
          </section>
        </main>
        <Footer />
      </div>
    );
  }
}
