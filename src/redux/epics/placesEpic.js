import { ofType } from 'redux-observable';
import { map, switchMap, catchError } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';
import { of } from 'rxjs';

const SEARCH_PLACE = 'SEARCH_PLACE';
const SEARCH_PLACE_SUCCESS = 'SEARCH_PLACE_SUCCESS';
const SEARCH_PLACE_FAILED = 'SEARCH_PLACE_FAILED';
const API_KEY = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

// ✅ Epic to handle Google Places API request
export const placesEpic = (action$) =>
  action$.pipe(
    ofType(SEARCH_PLACE),
    switchMap((action) =>
      ajax
        .getJSON(
          `http://localhost:4200/autocomplete?input=${action.payload}&key=${API_KEY}`
        )
        .pipe(
          map((response) => ({
            type: SEARCH_PLACE_SUCCESS,
            payload: response,
          })),
          catchError((error) =>
            of({ type: SEARCH_PLACE_FAILED, payload: error.message })
          )
        )
    )
  );