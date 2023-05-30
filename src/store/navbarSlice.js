import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  type: "classic", // 'classic', 'transparent'
}

export const slice = createSlice({
  name: "navbar",
  initialState,
  reducers: {
    setType: (state, action) => {
      state.type = action.payload == "transparent" ? "transparent" : "classic"
    },
    setNavbarClassic: (state, action) => {
      state.type = "classic"
    },
    setNavbarTransparent: (state, action) => {
      state.type = "transparent"
    },
  },
})

export default slice.reducer

export const { setType, setNavbarClassic, setNavbarTransparent } = slice.actions
