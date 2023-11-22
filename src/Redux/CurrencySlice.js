import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    appCurrency: 'INR'
};

const currencySlice = createSlice({
    name: 'currency',
    initialState,
    reducers: {
        changeCurrency: (state, action) => {
            state.appCurrency = action.payload;
        }
    }
});

export const { changeCurrency } = currencySlice.actions;
export default currencySlice.reducer;