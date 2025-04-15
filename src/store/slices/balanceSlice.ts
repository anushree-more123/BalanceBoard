import {createSlice} from '@reduxjs/toolkit';

interface balanceDetailsState {
  auto_fill_amount: string;
  auto_fill_date: string;
  balance: string;
}

interface balanceState {
  balanceLoader: boolean;
  balanceDetails: balanceDetailsState;
}

const balanceDetailsVal: balanceDetailsState = {
  auto_fill_amount: '',
  auto_fill_date: '',
  balance: '',
};

const initialState: balanceState = {
  balanceLoader: false,
  balanceDetails: balanceDetailsVal,
};

const balanceSlice = createSlice({
  name: 'balance',
  initialState,
  reducers: {
    updateBalanceLoader: (state, action) => {
      state.balanceLoader = action.payload;
    },
    setBalanceDetails: (state, action) => {
      state.balanceDetails = action.payload;
    },
  },
});

export const {updateBalanceLoader, setBalanceDetails} = balanceSlice.actions;
export default balanceSlice.reducer;
