import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const URL = 'https://api.coinstats.app/public/v1/coins/';

export const fetchDetails = createAsyncThunk('fetchDetails', async (id) => {
  try {
    const response = await fetch(`${URL}${id}`);
    const data = await response.json();
    return data;
  } catch (error) {
    return error;
  }
});

const initialState = {
  cryptoDetails: {},
  isLoading: false,
};

const extraReducers = {
  [fetchDetails.pending]: (state) => ({
    ...state,
    isLoading: true,
  }),
  [fetchDetails.fulfilled]: (state, { payload }) => ({
    ...state,
    isLoading: false,
    cryptoDetails: payload.coin,
  }),
};

const cryptoDetailsSlice = createSlice({
  name: 'cryptoDetails',
  initialState,
  extraReducers,
});

export default cryptoDetailsSlice.reducer;
