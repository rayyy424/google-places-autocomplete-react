import { SEARCH_PLACE_SUCCESS } from '../actions/placesAction';

const initialState = {
  searches: [],
};

const placesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_PLACE_SUCCESS:
      return {
        ...state,
        searches: [...state.searches, action.payload],
      };
    default:
      return state;
  }
};

export default placesReducer;