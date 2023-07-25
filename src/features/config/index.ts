import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { InitialStateProps } from "./types"

const initialState: InitialStateProps = {
    appName: "Soru & Cevap"
}

const configSlice = createSlice({
    name: "config",
    initialState,
    reducers: {
        changeAppName: (state, action: PayloadAction<InitialStateProps['appName']>) => {
            state.appName = action.payload;
        }
    }
});

export const {
    changeAppName
} = configSlice.actions;

export default configSlice.reducer;