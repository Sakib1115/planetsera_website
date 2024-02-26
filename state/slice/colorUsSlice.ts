import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  color: "#FF4F4F",
}

export const colorUsSlice = createSlice({
  name: "colorUs",
  initialState,
  reducers: {
    changeColor: (state, action) => {
      state.color = action.payload
    },
  },
})

export const { changeColor } = colorUsSlice.actions

export default colorUsSlice.reducer
