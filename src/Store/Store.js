import { configureStore } from '@reduxjs/toolkit';
import DeclareIncidentFormReducer from '../Components/DeclareIncidentForm/DeclareIncidentFormSlice'
import IncidentListReducer from '../Components/IncidentList/IncidentListSlice'

export const store = configureStore({
  reducer: {
    declareIncidentForm: DeclareIncidentFormReducer,
    ongoingIncidents: IncidentListReducer,

  },
});
