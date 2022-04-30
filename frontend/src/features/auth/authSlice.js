import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

// The initial state of the auth slice
const initialState = {
  user: null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {},
})

export default authSlice.reducer
