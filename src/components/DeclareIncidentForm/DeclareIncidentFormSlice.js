import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  incidentName: ''
}

export const slice = createSlice({
  name: 'declare-incident-form',
  initialState,
  reducers: {
    updateIncidentNameField: (state, action) => {
      console.log(action)
      state.incidentName = action.payload
    }
  }
})

export const { updateIncidentNameField } = slice.actions;

export default slice.reducer