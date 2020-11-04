import React from 'react';
import flights from '../../mocks/flights-mock';
import Main from '../main/main';
import Loading from '../loading/loading';

const getFlights = () => {
  return new Promise((resolve, rejects) => {
    let s = flights.replace(/\\n/g, "\\n")
      .replace(/\\'/g, "\\'")
      .replace(/\\"/g, '\\"')
      .replace(/\\&/g, "\\&")
      .replace(/\\r/g, "\\r")
      .replace(/\\t/g, "\\t")
      .replace(/\\b/g, "\\b")
      .replace(/\\f/g, "\\f");
    // remove non-printable and other non-valid JSON chars
    
    s = s.replace(/[\u0000-\u001F]+/g, "");
  
    resolve(JSON.parse(s));
  })
    .catch((err) => {
      throw new Error(err)
    });
}

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true
    }

    this._flights = null;
  }

  componentDidMount() {
      getFlights()
      .then((flights) => this._flights = flights)
      .then(()=> this.setState((state) => ({isLoading: !state.isLoading})))
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
