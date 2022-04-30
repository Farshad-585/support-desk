import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

// The initial state of the auth slice
const initialState = {
  user: null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
}

export const register = createAsyncThunk(
  'auth/register',
  async (user, thunkAPI) => {
    console.log(user)
  }
)

export const login = createAsyncThunk(
  'auth/register',
  async (user, thunkAPI) => {
    console.log(user)
  }
)

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {},
})

export default authSlice.reducer
