import * as React from 'react';
import Header from './template/Header'

export default class Home1 extends React.Component<{}> {
  public render() {
    return (
      <div>
        <Header/>
        <main>
            <section>
                <div>
                    Main 1
                </div>
            </section>
        </main>
      </div>
    );
  }
}
