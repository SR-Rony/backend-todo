import { configureStore } from '@reduxjs/toolkit'
import userReducer from "../fetures/users/userSlice"

export const store = configureStore({
  reducer: {
    user:userReducer
  },
})