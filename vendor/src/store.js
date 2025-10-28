import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { productListReducer, productDetailsReducer } from './reducers/productReducer';

const reducer = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer
})

const store = configureStore({
  reducer,
  devTools: true, // enables Redux DevTools automatically
});

export  default store;