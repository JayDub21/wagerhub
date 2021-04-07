import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
  state = {
    data: '',
  };

  componentDidMount() {
    fetch('/api/users')
      .then((response) => {
        return response.json();
      })
      .then((data) => this.setState({ data: JSON.stringify(data) }));
  }
  render() {
    return (
      <div>
        <h1>User Data:</h1>;{this.state.data}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
