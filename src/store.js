import { compose, createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { autoRehydrate, persistStore } from 'redux-persist';
import { TRANSIT_API } from '@databraid/transit-widget/lib';
import { GITHUB_API } from '@databraid/github-widget/lib';
import rootReducer from './reducers';

/* eslint-disable no-underscore-dangle */
const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  compose(
    applyMiddleware(thunkMiddleware.withExtraArgument({ TRANSIT_API, GITHUB_API })),
    autoRehydrate(),
  )
);

persistStore(store);

export default store;
