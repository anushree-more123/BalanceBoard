import {AppDispatch} from '../../store/store';
import {
  updateBalanceLoader,
  setBalanceDetails,
} from '../../store/slices/balanceSlice';
import axios from 'axios';

const BASE_URL = 'http://01.fy25ey02.64mb.io/';

export const fetchBalanceData = () => async (dispatch: AppDispatch) => {
  dispatch(updateBalanceLoader(true));

  try {
    const response = await axios.get(BASE_URL);
    console.log(response);

    if (response.status === 200) {
      dispatch(setBalanceDetails(response.data));
    }
  } catch (err) {
    console.error('Failed to fetch balance data:', err);
  } finally {
    dispatch(updateBalanceLoader(false));
  }
};
