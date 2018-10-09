import * as React from "react";
import logoFacebook from "../../assets/img/facebook-logo.svg";
import logoInstagram from "../../assets/img/instagram-logo.svg";
import logoTwitter from "../../assets/img/twitter-logo.svg";

export default class Footer extends React.Component<{}> {
  public render() {
    return (
      <footer
        className="flex-container flex-container-wrap space-around light"
        id="nav-footer"
      >
        <div>
          <ul id="lista-contatos">
            <li>
              <i className="material-icons">phone</i>
              Telefone 1: (69) 98132-8015
            </li>
            <li>
              <i className="material-icons">phone</i>
              Telefone 2: (69) 98422-5615
            </li>
            <li><i className="material-icons">mail</i>E-mail: igor.mcbueno@gmail.com</li>
          </ul>
        </div>
        <div>
          <ul id="lista-contatos">
            <li><i className="material-icons">home</i>End: Rua São Luiz | 474 | 5º BEC</li>
          </ul>
        </div>
        <nav id="nav-social">
          <ul className="flex-container flex-container-wrap flex-d-row">
            <li id="siga-nos">Siga-nos:</li>
            <li>
              <a>
                <img
                  className="footer-icon-light"
                  width="32"
                  height="32"
                  src={logoFacebook}
                  alt="Ícone do facebook"
                />
              </a>
            </li>
            <li>
              <a>
                <img
                  className="footer-icon-light"
                  width="32"
                  height="32"
                  src={logoTwitter}
                  alt="Ícone do twitter"
                />
              </a>
            </li>
            <li>
              <a>
                <img
                  className="footer-icon-dark"
                  width="32"
                  height="32"
                  src={logoInstagram}
                  alt="Ícone do instagram"
                />
              </a>
            </li>
          </ul>
        </nav>
      </footer>
    );
  }
}
