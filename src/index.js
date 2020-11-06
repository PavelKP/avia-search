import './assets/css/main.css';
import './js/common.js';
import './assets/scss/styles.scss'
import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import App from './components/app/app';
import {reducer} from '../src/store/reducer';
import {ActionCreator} from '../src/store/action';
import Loading from './components/loading/loading';


const URL = `https://pavelkp.github.io/json/flights.json`;
const getFlights = () => {
  return fetch(URL)
  .then((response) => {
    return response.json();
  })
  .catch((err) => {
    throw new Error(err);
  });
}

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
);

ReactDOM.render(<Loading />, document.querySelector(`#root`));

getFlights()
  .then((flights) => {
    store.dispatch(ActionCreator.loadFlights(flights));
  })
  .then(() => {
    ReactDOM.render(
      <Provider store={store}>
        <App />
      </Provider>,
      document.querySelector(`#root`)
    );
  })
  .catch((err) => {
    throw new Error(err);
  });
