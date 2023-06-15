import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface MapState {
  center: {
    lat: number;
    lng: number;
  };
  level: number;
}

const initialState: MapState = {
  center: {
    lat: 37.5665,
    lng: 126.978,
  },
  level: 3,
};

export const mapSlice = createSlice({
  name: 'map',
  initialState,
  reducers: {
    setCenter: (state, action: PayloadAction<{ lat: number; lng: number }>) => {
      state.center = action.payload;
    },
    setLevel: (state, action: PayloadAction<number>) => {
      state.level = action.payload;
    },
  },
});

export const { setCenter } = mapSlice.actions;
export const { setLevel } = mapSlice.actions;

export default mapSlice.reducer;
