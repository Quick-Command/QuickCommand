import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {
  runNameQuery
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
        if(!state.searchResults.map(result => result.id).includes(action.payload.id)) {
          state.searchResults.push(action.payload)
        }
      })
      .addCase(searchByName.rejected, (state) => {
        state.status = 'idle';
        state.searchResults = []
      })
  }
})

export default slice.reducer