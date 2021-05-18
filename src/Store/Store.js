import { configureStore } from '@reduxjs/toolkit';
import OngoingIncidentsReducer from '../Components/OngoingIncidents/OngoingIncidentsSlice'
import ResolvedIncidentsReducer from '../Components/ResolvedIncidents/ResolvedIncidentsSlice'
import searchResultsReducer from '../Components/DatabaseSearch/DatabaseSearchSlice'

export const store = configureStore({
  reducer: {
    ongoingIncidents: OngoingIncidentsReducer,
    resolvedIncidents: ResolvedIncidentsReducer,
    searchResults: searchResultsReducer
  },
});
