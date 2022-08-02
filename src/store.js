import { configureStore } from "@reduxjs/toolkit";
import appsReducers from './redux/appSlice'
export const store = configureStore({
    reducer: {
      app : appsReducers,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
      })
  })