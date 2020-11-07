import {extend} from '../utils';
import {ActionType} from './action';

const initialState = {
  flights: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_FLIGHTS:
      return extend(state, {
        flights: action.payload.result.flights,
      });
    default:
      return state;
  }
};

export {reducer};
