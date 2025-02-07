import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { placesEpic } from './epics/placesEpic';
import placesReducer from './reducers/placesReducer';

const rootReducer = combineReducers({
  places: placesReducer,
});

const epicMiddleware = createEpicMiddleware();

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware({ thunk: false }).concat(epicMiddleware),
});

epicMiddleware.run(placesEpic);

export default store;