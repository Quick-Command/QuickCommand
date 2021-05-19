import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {
  runNameQuery,
  fetchContactDets
} from '../../API-calls'

const initialState = {
  searchResults: [],
  displayedContact: {},
  status: 'idle'
}

export const searchByName = createAsyncThunk(
  'DatabaseSearch/searchByName',
  async (queryString) => {
    const response = await runNameQuery(queryString)
    return response.data
  }
)

export const displayContactDets = createAsyncThunk(
  'DatabaseSearch/displayContactDets',
  async (id) => {
    const response = await fetchContactDets(id)
    return response.data
  }
)

const slice = createSlice({
  name: 'search-results',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(searchByName.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(searchByName.fulfilled, (state, action) => {
        state.status = 'idle';
        state.searchResults = action.payload;
      })
      .addCase(displayContactDets.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(displayContactDets.fulfilled, (state, action) => {
        state.status = 'idle';
        state.displayedContact = action.payload
      })
  }
})

export default slice.reducer