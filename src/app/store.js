import { configureStore } from '@reduxjs/toolkit';
import leadReducer from '../reducers/leadDataManager';

export default configureStore({
  reducer: {
    lead: leadReducer,
  },
});
