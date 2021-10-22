import React, {Component} from 'react';

class SignOut extends Component {
  render() {
    return (
      <div>
        <header>
          This is my SignOut page!
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

export default SignOut;
