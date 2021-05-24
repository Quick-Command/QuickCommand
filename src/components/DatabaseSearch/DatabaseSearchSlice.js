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
        state.searchResults = action.payload;
      })
  }
})

export default slice.reducer