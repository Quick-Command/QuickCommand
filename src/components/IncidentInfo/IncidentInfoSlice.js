import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {
  fetchIncidentInfo
} from '../../API-calls'

const initialState = {
  incidentInfo: {},
  status: 'idle'
}

export const getIncidentInfo = createAsyncThunk(
  'incidentInfo/getIncidentInfo',
  async(id) => {
    const response = await fetchIncidentInfo(id)
    return response.data
  }
)

export const slice = createSlice({
  name: 'incident-info',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getIncidentInfo.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(getIncidentInfo.fulfilled, (state, action) => {
        state.status = 'idle';
        state.incidentInfo = action.payload
      })
  }
})

export default slice.reducer