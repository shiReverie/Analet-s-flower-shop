import { configureStore } from '@reduxjs/toolkit'
import flowerApi from './services/flowerApi.js'
import cartReducer from './services/cartSlice.js'

export const store = configureStore({
    reducer: {
        [flowerApi.reducerPath]: flowerApi.reducer,
        cart: cartReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(flowerApi.middleware),
});