import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {
  fetchContactsByRole
} from '../../API-calls'

const initialState = {
  searchByRole: [],
  status: 'idle'
}

export const searchByRole = createAsyncThunk(
  'PositionAssignment/searchByRole',
  async ({id, role}) => {
    const response = await fetchContactsByRole(id, role)
    return response.data
  }
)

const slice = createSlice({
  name: 'search-by-role',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(searchByRole.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(searchByRole.fulfilled, (state, action) => {
        state.status = 'idle';
        state.searchByRole = action.payload;
      })
      .addCase(searchByRole.rejected, (state) => {
        state.status = 'idle';
        state.searchByRole = [];
      })
  }
})

export default slice.reducer