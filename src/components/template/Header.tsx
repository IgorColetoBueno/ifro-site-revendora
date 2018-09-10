import * as React from "react";

export interface IHeaderProps {
  title?: string;
}

export interface IHeaderState {
  title?: string;
}

export default class IHeader extends React.Component<
  IHeaderProps,
  IHeaderState
> {
  constructor(props: IHeaderProps) {
    super(props);

    this.state = {
      title:
        this.props.title !== undefined ? this.props.title : "Minha revendedora"
    };
  }

  public render() {
    return (
      <div>
        <header>
          <nav className="navbar-nav navbar-light flex-container flex-d-row">
              <span className="navbar-title">{this.state.title}</span>
            <ul className="flex-container flex-d-row">
              <li className="navbar-item">Quem somos</li>
              <li className="navbar-item">Meus produtos</li>
              <li className="navbar-item">Contato</li>
            </ul>
          </nav>
        </header>
      </div>
    );
  }
}
