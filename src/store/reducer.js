import {extend} from '../utils';
import {ActionType} from './action';
import {SortingType} from '../const';

const initialState = {
  flights: [],
  sorting: SortingType.TO_HIGH,
  transferOne: false,
  transferZero: false,
  priceFrom: 0,
  priceTo: 1000000,
  activeCompanies: [],
};

const refreshCompanies = (array, element) => {
  const unique = new Set(array);
  if (unique.has(element)) {
    unique.delete(element);
  } else {
    unique.add(element);
  }

  return [...unique]
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_FLIGHTS:
      return extend(state, {
        flights: action.payload.result.flights,
      });
    case ActionType.SET_SORTING:
      return extend(state, {
        sorting: action.payload,
      });
    case ActionType.SET_COMPANY:
      return extend(state, {
        activeCompanies: refreshCompanies(state.activeCompanies, action.payload),
      });
    case ActionType.CHANGE_TRANSFER_ONE:
      return extend(state, {
        transferOne: !state.transferOne,
      });
    case ActionType.CHANGE_TRANSFER_ZERO:
      return extend(state, {
        transferZero: !state.transferZero,
      });
    case ActionType.SET_PRICE_FROM:
      return extend(state, {
        priceFrom: action.payload,
      });
    case ActionType.SET_PRICE_TO:
      return extend(state, {
        priceTo: action.payload,
      });
    default:
      return state;
  }
};

export {reducer};
