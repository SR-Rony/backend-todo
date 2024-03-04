import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: "active user",
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    activeUser: (state) => {
      state.value
    }
  },
})

// Action creators are generated for each case reducer function
export const { activeUser} = userSlice.actions

export default userSlice.reducer