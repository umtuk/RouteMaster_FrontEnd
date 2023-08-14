import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const NumOfRows = 10;

export const fetchAttractionsByType = createAsyncThunk(
  '/attractions/fetchByType',
  async (arg: { type: string; page: number }) => {
    const response = await axios.get(
      `/attraction/search/${arg.type}?numOfRows=${NumOfRows}&pageNo=${arg.page}&arrange=A&areaCode=1&sigunguCode=1`,
    );
    if (!response) {
      throw new Error('Network response was not ok');
    }
    return response.data.attractions;
  },
);
