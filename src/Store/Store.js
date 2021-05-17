import { configureStore } from '@reduxjs/toolkit';
import IncidentListReducer from '../Components/IncidentList/IncidentListSlice'

export const store = configureStore({
  reducer: {
    incidentList: IncidentListReducer
  },
});
