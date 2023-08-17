import { configureStore } from '@reduxjs/toolkit';
import attractionsSlice from './Slices/attractions/slice';

const store = configureStore({
  reducer: {
    attractionsThunk: attractionsSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
