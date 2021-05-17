import { configureStore } from '@reduxjs/toolkit';
import DeclareIncidentFormReducer from '../Components/IncidentForm/IncidentFormSlice'
import IncidentListReducer from '../Components/IncidentList/IncidentListSlice'

export const store = configureStore({
  reducer: {
    declareIncidentForm: DeclareIncidentFormReducer,
    ongoingIncidents: IncidentListReducer,

  },
});
