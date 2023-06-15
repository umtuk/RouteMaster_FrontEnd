import { configureStore } from '@reduxjs/toolkit';

import mapReducer from './Slices/mapSlice';

const store = configureStore({
  reducer: {
    map: mapReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
