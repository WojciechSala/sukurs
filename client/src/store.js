import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { productsReducer } from './components/Products/ProductsReducer';
import { productDetailsReducer } from './components/Product/ProductDetailsReducer';
import thunk from 'redux-thunk';

const reducers = combineReducers({
  productsReducer,
  productDetailsReducer
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  reducers,
  composeEnhancer(applyMiddleware(thunk))
);
