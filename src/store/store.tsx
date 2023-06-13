import { configureStore } from '@reduxjs/toolkit';

import mapReducer from './Slices/mapSlice';

const store = configureStore({
  reducer: {
    map: mapReducer,
  },
});

export default store;
