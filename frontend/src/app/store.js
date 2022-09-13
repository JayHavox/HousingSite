import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice'
import houseReducer from '../features/houses/houseSlice'


export const store = configureStore({
  reducer: {
    auth: authReducer,
    homes: houseReducer,
  },
});
