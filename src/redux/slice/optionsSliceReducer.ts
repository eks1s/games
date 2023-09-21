import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface IOptionState {
    option: string;
}

const initialState: IOptionState = {
    option: "",
};

export const optionSlice = createSlice({
    name: "optionFilter",
    initialState,
    reducers: {
        setOption: (state, action: PayloadAction<string>) => {
            state.option = action.payload;
        },
        clearOption: (state) => {
            state.option = "";
        },
    },
});

export const { setOption, clearOption } = optionSlice.actions;

export default optionSlice.reducer;
