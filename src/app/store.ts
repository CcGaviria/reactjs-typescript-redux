import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import dashboardReducer from '../pages/dashboard/dashboardSlice';
import userReducer from '../pages/user/userSlice';
import postReducer from '../pages/post/postSlice';

export const store = configureStore({
  reducer: {
    dashboard: dashboardReducer,
    user: userReducer,
    post: postReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
