import rootReducer from './reducer';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

const finalCreateStore = compose(
  applyMiddleware(thunk)
)(createStore);

export default function configureStore (initialState) {
  return finalCreateStore(rootReducer, initialState);
}
