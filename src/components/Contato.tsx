import * as React from "react";
import Footer from "./template/Footer";
import Header from "./template/Header";

interface IContatoState {
  nome: string;
  email: string;
  descricao: string;
  observacoes: string;
}

export default class Contato extends React.Component<IContatoState> {
  constructor(props: any) {
    super(props);

    this.changeNome = this.changeNome.bind(this);
    this.changeEmail = this.changeEmail.bind(this);
    this.changeDescricao = this.changeDescricao.bind(this);
    this.changeObservacoes = this.changeObservacoes.bind(this);
    this.exibirAlerta = this.exibirAlerta.bind(this);

    this.state = {
      descricao: "",
      email: "",
      nome: "",
      observacoes: ""
    } as IContatoState;
  }
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
            <div className="limit-box box-centered">
              <form onSubmit={this.exibirAlerta}>
                <fieldset className="form-group">
                  <label htmlFor="nome">Nome Completo</label>
                  <input
                    onChange={this.changeNome}
                    required={true}
                    type="text"
                    name="nome"
                  />
                </fieldset>
                <fieldset className="form-group">
                  <label htmlFor="email">E-mail</label>
                  <input
                    onChange={this.changeEmail}
                    required={true}
                    type="email"
                    name="email"
                  />
                </fieldset>
                <fieldset className="form-group">
                  <label htmlFor="descricao">Descrição</label>
                  <input
                    onChange={this.changeDescricao}
                    required={true}
                    type="text"
                    name="descricao"
                  />
                </fieldset>
                <fieldset className="form-group">
                  <label htmlFor="observacoes">Observações</label>
                  <textarea
                    onChange={this.changeObservacoes}
                    required={true}
                    name="observacoes"
                  />
                </fieldset>
                <button type="submit">Enviar</button>
              </form>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    );
  }

  private changeNome(event: any) {
    this.setState({ ...this.state, nome: event.target.value } as IContatoState);
  }

  private changeEmail(event: any) {
    this.setState({
      ...this.state,
      email: event.target.value
    } as IContatoState);
  }

  private changeDescricao(event: any) {
    this.setState({
      ...this.state,
      descricao: event.target.value
    } as IContatoState);
  }

  private changeObservacoes(event: any) {
    this.setState({
      ...this.state,
      observacoes: event.target.value
    } as IContatoState);
  }

  private exibirAlerta(event: React.FormEvent<Element>): void {
    event.preventDefault();
    alert(JSON.stringify(this.state));
  }
}
