import { configureStore } from "@reduxjs/toolkit";

import currencySliceReducer from './CurrencySlice';
const store = configureStore({
    reducer: {
        currency: currencySliceReducer
    },
    devTools: true
});

export default store;