// import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
// import thunk from 'redux-thunk';
//
// const reducer = combineReducers({
//   tasks: [],
// });
//
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// export const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));
import { configureStore } from '@reduxjs/toolkit';
import flightsReducer from './flights/flightsSlice';

export default configureStore({
  reducer: {
    flights: flightsReducer,
  },
});