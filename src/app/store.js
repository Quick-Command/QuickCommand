import { configureStore } from '@reduxjs/toolkit';
import DeclareIncidentFormReducer from '../components/DeclareIncidentForm/DeclareIncidentFormSlice'
import IncidentListReducer from '../components/IncidentList/IncidentListSlice'

export const store = configureStore({
  reducer: {
    declareIncidentForm: DeclareIncidentFormReducer,
    ongoingIncidents: IncidentListReducer
  },
});
