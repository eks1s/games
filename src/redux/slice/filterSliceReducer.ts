import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface IFilterState {
    filter: string;
}

const initialState: IFilterState = {
    filter: "",
};

export const filterSlice = createSlice({
    name: "productFilter",
    initialState,
    reducers: {
        setFilter: (state, action: PayloadAction<string>) => {
            state.filter = action.payload;
        },
        clearFilter: (state) => {
            state.filter = "";
        },
    },
});

export const { setFilter } = filterSlice.actions;

export default filterSlice.reducer;
