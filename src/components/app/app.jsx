import React from 'react';
import Main from '../main/main';
import Loading from '../loading/loading';
/*
const url = `https://pavelkp.github.io/json/flights.json`;

const getFlights = () => {
  return fetch(url)
  .then((response) => {
    return response.json();
  })
}
*/
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false
    }

    this._flights = null;
  }

  componentDidMount() {
   /* getFlights()
      .then((flights) => this._flights = flights)
      .then(()=> this.setState((state) => ({isLoading: !state.isLoading})));*/
  }

  render() {
    if (this.state.isLoading) {
      return <Loading />
    } else {
      return <Main flights={this._flights}/>
    }

  }
}

export default App;
