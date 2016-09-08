import React, {Component} from 'react';
import Rebase from 're-base'
import './App.css';

const base = Rebase.createClass({
  //     apiKey: "AIzaSyD98Sn5YE1YKCoPnLrUtA1Yc8sXAJd5Ls0",
  //     authDomain: "orlando-demo-6a14e.firebaseapp.com",
  //     databaseURL: "https://orlando-demo-6a14e.firebaseio.com",
  //     storageBucket: "",
  // });

  apiKey: "AIzaSyBcuS9bM3w2j5B8qUjpdqavSEE3NbGoMGw",
  authDomain: "orlando-demo-baa37.firebaseapp.com",
  databaseURL: "https://orlando-demo-baa37.firebaseio.com",
  storageBucket: ""
});

class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      loading: true
    }
    this.handleAddChats = this.handleAddChats.bind(this);
    this.handleRemoveChats = this.handleRemoveChats.bind(this);
  }

  componentDidMount() {
    this.rebaseRef = base.syncState('chatList', {
      context: this,
      state: 'list',
      asArray: true,
      then() {
        this.setState({loading: false})
        console.log(this.state);
      }
    })
  }
  componentWillUnmount() {
    base.removeBinding(this.rebaseRef)
  }
  handleAddChats(event) {
    event.preventDefault()
    let message = event.target.elements[0].value;
    this.setState({
      list: this.state.list.concat([message])
      //add message to array
    })
  }
  handleRemoveChats(index) {
    let newList = this.state.list;
    newList.splice(index, 1);
    this.setState({list: newList})
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>Re-Base Chat App</h1>
        </div>
        <p className="App-intro">
          <h2>
            <strong>Hello, is it me you're looking for?</strong>
          </h2>
        </p>
        <div className="chat">
          <form onSubmit={this.handleAddChats}>
            <input type="text"/>
            <button type="sendBtn">Send</button>
          </form>
          {this.state.list.map((chat) => <p>-{chat}</p>)}
        </div>

      </div>
    );
  }
}

export default Chat
