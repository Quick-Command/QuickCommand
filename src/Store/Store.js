import { configureStore } from '@reduxjs/toolkit';
import OngoingIncidentsReducer from '../Components/OngoingIncidents/OngoingIncidentsSlice'
import searchResultsReducer from '../Components/DatabaseSearch/DatabaseSearchSlice'

export const store = configureStore({
  reducer: {
    ongoingIncidents: OngoingIncidentsReducer,
    searchResults: searchResultsReducer
  },
});
