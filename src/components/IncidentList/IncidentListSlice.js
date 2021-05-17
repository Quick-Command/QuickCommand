import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {
  fetchOngoingIncidents,
  postNewIncident
} from '../../API-calls'

const initialState = {
  ongoingIncidents: [],
  status: 'idle'
}

export const getOngoingIncidents = createAsyncThunk(
  'IncidentList/getOngoingIncidents',
  async () => {
    const response = await fetchOngoingIncidents()
    return response.data
  }
)

export const declareNewIncident = createAsyncThunk(
  'IncidentList/declareNewIncident',
  async(incidentObj) => {
    const response = await postNewIncident(incidentObj)
    return response.data
  }
)

export const slice = createSlice({
  name: 'incident-list',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getOngoingIncidents.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(getOngoingIncidents.fulfilled, (state, action) => {
        state.status = 'idle';
        state.ongoingIncidents = action.payload
      })
      .addCase(declareNewIncident.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(declareNewIncident.fulfilled, (state, action) => {
        state.status = 'idle';
        state.ongoingIncidents.push(action.payload)
      })

  }
})

export default slice.reducer