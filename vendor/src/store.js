import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { productListReducer, productDetailsReducer } from './reducers/productReducer';
import { cartReducer } from './reducers/cartReducer';

const reducer = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer,
    cart : cartReducer
})

const cartItemsFromStorage = localStorage.getItem('cartItems') ?
JSON.parse(localStorage.getItem('cartItems')): [];

const initialState = {
  cart: { cartItems: cartItemsFromStorage}
}

const store = configureStore({
  reducer,
 preloadedState: initialState,
  devTools: true, // enables Redux DevTools automatically
});

export  default store; 