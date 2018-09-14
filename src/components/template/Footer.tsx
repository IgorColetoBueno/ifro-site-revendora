import * as React from "react";

export default class Footer extends React.Component<{}> {
  public render() {
    return (
      <footer id="nav-footer">
        <nav>
          <ul className="flex-container flex-d-row">
            <li>
              <a className="navbar-light navbar-item" href="https://www.facebook.com">
                <i id="facebook-icon">&nbsp;</i>
              </a>
            </li>
            <li>
              <a className="navbar-light navbar-item" href="https://www.twitter.com">
                <i id="twitter-icon">&nbsp;</i>
              </a>
            </li>
            <li>
              <a className="navbar-light navbar-item" href="https://www.instagram.com">
                <i id="instagram-icon">&nbsp;</i>
              </a>
            </li>
          </ul>
        </nav>
        <div id="freepik">
          Icons made by{" "}
          <a href="http://www.freepik.com" title="Freepik">
            Freepik
          </a>{" "}
          from{" "}
          <a href="https://www.flaticon.com/" title="Flaticon">
            www.flaticon.com
          </a>{" "}
          is licensed by{" "}
          <a
            href="http://creativecommons.org/licenses/by/3.0/"
            title="Creative Commons BY 3.0"
            target="_blank"
          >
            CC 3.0 BY
          </a>
        </div>
      </footer>
    );
  }
}
