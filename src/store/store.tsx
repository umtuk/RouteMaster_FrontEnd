import { configureStore } from '@reduxjs/toolkit';
import mapReducer from './Slices/mapSlice';

export const store = configureStore({
  reducer: {
    map: mapReducer,
  },
});

export default store;
