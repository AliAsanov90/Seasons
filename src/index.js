import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { lat: null };

    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({ lat: position.coords.latitude }),
      err => this.setState({ lat: `Error: ${err.message}` })
    );
  }

   render() {
    return <div>Latitude: {this.state.lat}</div>;
  }
}


ReactDOM.render(
  <App />,
  document.getElementById('root')
);
