import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {
  fetchResolvedIncidents
} from '../../API-calls'

const initialState = {
  resolvedIncidents: [],
  status: 'idle'
}

export const getResolvedIncidents = createAsyncThunk(
  'resolvedIncidents/getResolvedIncidents',
  async () => {
    const response = await fetchResolvedIncidents()
    return response.data
  }
)

export const slice = createSlice({
  name: 'resolved-incidents',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getResolvedIncidents.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(getResolvedIncidents.fulfilled, (state, action) => {
        state.status = 'idle'
        state.resolvedIncidents = action.payload
      })
  }
})

export default slice.reducer