import { configureStore } from "@reduxjs/toolkit"
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import authSlice from "./authSlice"
// import navbarSlice from "./navbarSlice"

const store = configureStore({
  reducer: {
    authSlice,
    // navbarSlice,
  },
})

export default store

/**
 * @typedef {ReturnType<typeof store.getState>} RootState
 */

/**  @type {import('react-redux').TypedUseSelectorHook<RootState>} */
export const useAppSelector = useSelector

export const useAppDispatch = useDispatch
