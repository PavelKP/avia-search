export const ActionType = {
  LOAD_FLIGHTS: `LOAD_FLIGHTS`,
  SET_SORTING: `SET_SORTING`,
  SET_COMPANY: `SET_COMPANY`,
};

export const ActionCreator = {
  loadFlights(flights) {
    return {
      type: ActionType.LOAD_FLIGHTS,
      payload: flights,
    };
  },
  setSorting(sortingType) {
    return {
      type: ActionType.SET_SORTING,
      payload: sortingType,
    };
  },
  setCompany(companyName) {
    return {
      type: ActionType.SET_COMPANY ,
      payload: companyName,
    };
  },
};
