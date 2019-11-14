import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from './ducks';

export const initializeStore = (preloadedState = {}) => createStore(reducer, preloadedState, composeWithDevTools(applyMiddleware()));
