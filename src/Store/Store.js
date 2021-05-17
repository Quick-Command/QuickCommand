import { configureStore } from '@reduxjs/toolkit';
import IncidentListReducer from '../Components/IncidentList/IncidentListSlice'
import searchResultsReducer from '../Components/DatabaseSearch/DatabaseSearchSlice'

export const store = configureStore({
  reducer: {
    incidentList: IncidentListReducer,
    searchResults: searchResultsReducer
  },
});
