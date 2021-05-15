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
    }
  }
})

export const { 
  updateIncidentNameField, 
  updateIncidentTypeSelection, 
  updateIncidentDateSelection,
  updateIncidentSummary 
} = slice.actions;

export default slice.reducer