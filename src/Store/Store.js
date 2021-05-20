import { configureStore } from '@reduxjs/toolkit';
import OngoingIncidentsReducer from '../components/OngoingIncidents/OngoingIncidentsSlice';
import ResolvedIncidentsReducer from '../components/ResolvedIncidents/ResolvedIncidentsSlice';
import SearchResultsReducer from '../components/DatabaseSearch/DatabaseSearchSlice';
import incidentContactsReducer from '../components/ChartView/ChartViewSlice';

export const store = configureStore({
  reducer: {
    ongoingIncidents: OngoingIncidentsReducer,
    resolvedIncidents: ResolvedIncidentsReducer,
    searchResults: SearchResultsReducer,
    incidentContacts: incidentContactsReducer
  },
});
