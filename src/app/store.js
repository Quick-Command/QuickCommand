import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import DeclareIncidentFormReducer from '../components/DeclareIncidentForm/DeclareIncidentFormSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    declareIncidentForm: DeclareIncidentFormReducer
  },
});