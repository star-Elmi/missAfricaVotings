import { configureStore } from "@reduxjs/toolkit"
import modalSlice from "./features/modal/modalSlice"
import competitorSlice from "./features/Competitor/competitorSlice"

export const Store = configureStore({
    reducer: {
        // Define your slices here
        modal: modalSlice,
        competitor: competitorSlice
    }
})