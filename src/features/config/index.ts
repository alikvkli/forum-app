import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { InitialStateProps } from "./types"

const initialState: InitialStateProps = {
    appName: "Soru & Cevap",
    menu:false
}

const configSlice = createSlice({
    name: "config",
    initialState,
    reducers: {
        changeMenu : (state,action:PayloadAction<InitialStateProps['menu']>) => {
            state.menu = action.payload;
        }
    }
});

export const {
    changeMenu
} = configSlice.actions;

export default configSlice.reducer;