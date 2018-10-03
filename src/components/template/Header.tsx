import * as React from "react";
import { Link } from "react-router-dom";

export interface IHeaderProps {
  title?: string;
}

export interface IHeaderState {
  title?: string;
  toggle: boolean;
}

export default class IHeader extends React.Component<
  IHeaderProps,
  IHeaderState
> {
  constructor(props: IHeaderProps) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      title:
        this.props.title !== undefined ? this.props.title : "Minha revendedora",
      toggle: false
    };
  }

  public toggleNavbar() {
    this.setState({ ...this.state, toggle: !this.state.toggle });
  }

  public render() {
    return (
      <header>
        <div className="navbar-nav nav-flex-container">
          <div className="navbar-light">
            <a id="btn-toggle" onClick={this.toggleNavbar}>
              <i className="material-icons">menu</i>
            </a>            
            <span className="navbar-title">
              <Link to="/" className="navbar-item">
                {this.state.title}
              </Link>
            </span>
          </div>

          <nav
            className={`navbar-aria-toggle navbar-light ${
              this.state.toggle ? "toggle-enabled" : "toggle-disabled"
            }`}
          >
            <ul
              id="lista-elementos-nav"
              className="nav-flex-container items-center"
            >
              <li>
                <Link to="/QuemSomos" className="navbar-item">
                  Quem somos
                </Link>
              </li>
              <li>
                <Link to="/Contato" className="navbar-item">
                  Contato
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    );
  }
}
