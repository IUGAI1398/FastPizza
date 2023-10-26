import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./features/user/userSlice";
import carSlice from "./features/cart/carSlice";

const store = configureStore({
    reducer:  {
        user: userSlice,
        cart: carSlice
    }
})

export default store