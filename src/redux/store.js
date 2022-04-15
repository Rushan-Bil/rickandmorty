import { applyMiddleware, createStore } from 'redux';
import { initState } from './initState';
import { rootReducer } from './reducers/rootReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

export const store = createStore(
  rootReducer,
  initState,
  composeWithDevTools(
    applyMiddleware(thunk)
  )
)
