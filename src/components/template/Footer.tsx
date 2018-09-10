import * as React from 'react';

export default class Footer extends React.Component<{}> {
  public render() {
    return (
      <footer>
        <nav>
            <ul className="flex-container flex-d-row">
                <li><a href="https://www.facebook.com">Facebook</a></li>
                <li>Footer</li>
            </ul>
        </nav>
      </footer>
    );
  }
}
