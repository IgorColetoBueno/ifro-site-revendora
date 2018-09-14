import * as React from 'react';

export default class Footer extends React.Component<{}> {
  public render() {
    return (
      <footer id="nav-footer">
        <nav>
            <ul className="flex-container flex-d-row">
                <li><a className="navbar-light" href="https://www.facebook.com">Facebook</a></li>
            </ul>
        </nav>
      </footer>
    );
  }
}
