import * as React from "react";
import Footer from "./template/Footer";
import Header from "./template/Header";

export default class Home extends React.Component<{}> {
  public render() {
    return (
      <div>
        <Header />
        <main>
          <section id="section-apresentacao">
            <div className="apresentacao">
              <span id="titulo-apresentacao">
                Sua beleza nunca foi tão natural!
              </span>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    );
  }
}
