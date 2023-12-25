import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../features/user/authSlice';

export const store = configureStore({
  reducer: {
    authenticate: authReducer,
  },
})