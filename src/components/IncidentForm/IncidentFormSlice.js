import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  incidentName: '',
  incidentType: '',
  incidentDate: '',
  incidentSummary: ''
}

export const slice = createSlice({
  name: 'declare-incident-form',
  initialState,
  reducers: {
    updateIncidentNameField: (state, action) => {
      state.incidentName = action.payload
    },
    updateIncidentTypeSelection: (state, action) => {
      state.incidentType = action.payload
    },
    updateIncidentDateSelection: (state, action) => {
      state.incidentDate = action.payload
    },
    updateIncidentSummary: (state, action) => {
      state.incidentSummary = action.payload
    },
    clearInputs: (state) => {
      state.incidentName = ''
      state.incidentType = ''
      state.incidentDate = ''
      state.incidentSummary = ''
    }
  }
})

export const { 
  updateIncidentNameField, 
  updateIncidentTypeSelection, 
  updateIncidentDateSelection,
  updateIncidentSummary,
  clearInputs 
} = slice.actions;

export default slice.reducer