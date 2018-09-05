import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import 'bulma/bulma';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list:[
        "oranges",
        "apples",
        "bananas"
      ]
    }
  }
  render() {
    return(
    <div className="content">
      <ul>
        {this.state.list.map(item => (
          <li>{item}</li>
        ))}
      </ul>
    </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));