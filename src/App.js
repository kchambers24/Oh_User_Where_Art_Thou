import React, {Component} from 'react';
import Rebase from 're-base'
import './App.css';

class App extends Component {

  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}

export default App;
