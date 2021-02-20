import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk, RootState } from '../../app/store';
import {ItfUser} from "../../app/interfaces";
import {apiGetUsers} from "../../app/api";

interface DashboardState {
  users: Array<ItfUser>;
}
const initialState: DashboardState = {
  users: [],
};
export const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {
    loadData: (state, action: PayloadAction<Array<ItfUser>>) => {
      state.users = action.payload;
    },
  },
});
export const { loadData } = dashboardSlice.actions;
export const loadUsers = (): AppThunk => async dispatch => {
  dispatch(loadData(await apiGetUsers()));
};
export const selectUsers = (state: RootState) => state.dashboard.users;
export default dashboardSlice.reducer;
