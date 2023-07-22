import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const URL = 'https://api.coinstats.app/public/v1/coins?skip=0&limit=20&currency=USD';

export const fetchCryptoData = createAsyncThunk(
  'getData',
  async () => {
    try {
      const response = await fetch(URL);
      const data = await response.json();
      return data;
    } catch (error) {
      return error;
    }
  },
);

const initialState = {
  cryptoArray: [],
  isLoading: false,
};

const cryptoSlice = createSlice({
  name: 'currency',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCryptoData.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchCryptoData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.cryptoArray = action.payload.coins;
      })
      .addCase(fetchCryptoData.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export default cryptoSlice.reducer;
