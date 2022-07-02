import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './slices/loadingSlice';

const store = configureStore({
  reducer: {
    loading: counterReducer,
  },
});

export default store;
