import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk, RootState } from '../../app/store';
import {ItfComment} from "../../app/interfaces";
import { apiGetComments } from "../../app/api";

interface PostState {
  comments: Array<ItfComment>;
}
const initialState: PostState = {
  comments: [],
};
export const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    loadData: (state, action: PayloadAction<Array<ItfComment>>) => {
      state.comments = action.payload;
    },
  },
});
export const { loadData } = postSlice.actions;
export const loadComments = (postId:string): AppThunk => async dispatch => {
  dispatch(loadData(await apiGetComments(postId)));
};
export const selectComments = (state: RootState) => state.post.comments;
export default postSlice.reducer;
