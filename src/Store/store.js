import { configureStore } from '@reduxjs/toolkit';
import OngoingIncidentsReducer from '../components/OngoingIncidents/OngoingIncidentsSlice';
import ResolvedIncidentsReducer from '../components/ResolvedIncidents/ResolvedIncidentsSlice';
import SearchResultsReducer from '../components/DatabaseSearch/DatabaseSearchSlice';
import IncidentContactsReducer from '../components/ChartView/ChartViewSlice';
import IncidentInfoReducer from '../components/IncidentInfo/IncidentInfoSlice';
import SearchByRoleReducer from '../components/PositionAssignment/PositionAssignmentSlice'

export const store = configureStore({
  reducer: {
    ongoingIncidents: OngoingIncidentsReducer,
    resolvedIncidents: ResolvedIncidentsReducer,
    searchResults: SearchResultsReducer,
    incidentContacts: IncidentContactsReducer,
    incidentInfo: IncidentInfoReducer,
    searchByRole: SearchByRoleReducer
  },
});
