import { createSlice } from "@reduxjs/toolkit";
import { getComments, postComment, updateComment } from "./operations";
const initialState = {
	comments: [],
	isLoading: false,
	error: null,
};

export const commentsSlice = createSlice({
	name: "comments",
	initialState,
	extraReducers: (builder) => {
		builder
			.addCase(getComments.pending, (state) => {
				state.isLoading = true;
				state.error = null;
			})
			.addCase(getComments.fulfilled, (state, action) => {
				state.comments = action.payload;
				state.isLoading = false;
			})
			.addCase(getComments.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.payload;
			})
			.addCase(postComment.pending, (state) => {
				state.isLoading = true;
				state.error = null;
			})
			.addCase(postComment.fulfilled, (state, action) => {
				state.comments = [...state.comments, action.payload];
				state.isLoading = false;
			})
			.addCase(postComment.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.payload;
			})
			.addCase(updateComment.pending, (state) => {
				state.isLoading = true;
				state.error = null;
			})
			.addCase(updateComment.fulfilled, (state, action) => {
				state.comments = state.comments.map((comment) =>
					comment.id === action.payload.id ? action.payload : comment
				);
				state.isLoading = false;
			})
			.addCase(updateComment.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.payload;
			});
	},
});

export default commentsSlice.reducer;

//Selectors
