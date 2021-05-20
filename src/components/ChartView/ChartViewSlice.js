import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchIncidentContacts } from '../../API-calls';

const initialState = {
  incidentContacts: [],
  status: 'idle'
}

export const getIncidentContacts = createAsyncThunk(
  'incidentContacts/getIncidentContacts',
  async (id) => {
    const response = await fetchIncidentContacts(id)
    return response.data;
  }
)

export const slice = createSlice({
  name: 'incident-contacts',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getIncidentContacts.pending, state => {
        state.status = 'loading'
      })
      .addCase(getIncidentContacts.fulfilled, (state, action) => {
        state.status = 'idle'
        state.incidentContacts = action.payload
      })
  }
})

export default slice.reducer;

