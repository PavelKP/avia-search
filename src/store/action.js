export const ActionType = {
  LOAD_FLIGHTS: `LOAD_FLIGHTS`,
};

export const ActionCreator = {
  loadFlights(flights) {
    return {
      type: ActionType.LOAD_FLIGHTS,
      payload: flights,
    };
  }
};
