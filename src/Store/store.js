import { configureStore } from '@reduxjs/toolkit';
import OngoingIncidentsReducer from '../components/OngoingIncidents/OngoingIncidentsSlice';
import ResolvedIncidentsReducer from '../components/ResolvedIncidents/ResolvedIncidentsSlice';
import SearchResultsReducer from '../components/DatabaseSearch/DatabaseSearchSlice';

export const store = configureStore({
  reducer: {
    ongoingIncidents: OngoingIncidentsReducer,
    resolvedIncidents: ResolvedIncidentsReducer,
    searchResults: SearchResultsReducer
  },
});
