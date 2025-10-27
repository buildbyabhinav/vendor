import { combineReducers, configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';

import { productListReducer } from './reducers/productReducer';

const initialState ={}

const reducer = combineReducers({
    productList: productListReducer
})

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
  devTools: true, // enables Redux DevTools automatically
});

export  default store;