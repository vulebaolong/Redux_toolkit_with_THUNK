import { configureStore } from "@reduxjs/toolkit";
import userSlices from "./slices/userSlice";

export const store = configureStore({
    reducer: {
        userSlices,
    },
});
