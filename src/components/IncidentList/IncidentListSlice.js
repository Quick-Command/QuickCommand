import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  ongoingIncidents: []
}

export const slice = createSlice({
  name: 'incident-list',
  initialState,
  reducers: {
    declareIncident: (state, action) => {
      state.ongoingIncidents.push(action.payload)
    }
  }
})

export const {
  declareIncident,
} = slice.actions

export default slice.reducer