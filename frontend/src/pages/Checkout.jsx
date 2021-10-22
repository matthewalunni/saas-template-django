import React, {Component} from 'react';

class Checkout extends Component {
  render() {
    return (
      <div>
        <header>
          This is my checkout page!
        </header>

        <main>
          {this.props.children}
        </main>

        <footer>
          Your copyright message
        </footer>
      </div>
    );
  }
}

export default Checkout;
