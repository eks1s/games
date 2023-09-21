import { configureStore } from "@reduxjs/toolkit";
import { gamesApi } from "../api/gamesApi";
import filterSliceReducer from "./slice/filterSliceReducer";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import optionsSliceReducer from "./slice/optionsSliceReducer";

export const store = configureStore({
    reducer: {
        [gamesApi.reducerPath]: gamesApi.reducer,
        productFilter: filterSliceReducer,
        optionFilter: optionsSliceReducer,
    },

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(gamesApi.middleware),
});

export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<
    ReturnType<typeof store.getState>
> = useSelector;
