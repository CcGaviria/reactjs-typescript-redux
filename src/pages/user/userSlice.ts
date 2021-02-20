import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk, RootState } from '../../app/store';
import { ItfPost } from "../../app/interfaces";
import { apiGetPosts } from "../../app/api";

interface UserState {
  posts: Array<ItfPost>;
}
const initialState: UserState = {
  posts: [],
};
export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loadData: (state, action: PayloadAction<Array<ItfPost>>) => {
      state.posts = action.payload;
    },
  },
});
export const { loadData } = userSlice.actions;
export const loadPosts = (userId:string): AppThunk => async dispatch => {
  dispatch(loadData(await apiGetPosts(userId)));
};
export const selectPosts = (state: RootState) => state.user.posts;
export default userSlice.reducer;
