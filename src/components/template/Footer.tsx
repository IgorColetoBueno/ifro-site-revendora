import * as React from "react";
import logoFacebook from "../../assets/img/facebook-logo.svg";
import logoInstagram from "../../assets/img/instagram-logo.svg";
import logoTwitter from "../../assets/img/twitter-logo.svg";

export default class Footer extends React.Component<{}> {
  public render() {
    return (
      <footer id="nav-footer">
        <nav>
          <ul className="flex-container flex-d-row">
            <li id="siga-nos">Siga-nos nas redes sociais :p</li>
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
