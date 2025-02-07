export const SEARCH_PLACE = 'SEARCH_PLACE';
export const SEARCH_PLACE_SUCCESS = 'SEARCH_PLACE_SUCCESS';

export const searchPlace = (query) => ({
  type: SEARCH_PLACE,
  payload: query,
});

export const searchPlaceSuccess = (place) => ({
  type: SEARCH_PLACE_SUCCESS,
  payload: place,
});