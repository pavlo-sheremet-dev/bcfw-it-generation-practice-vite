import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { getComments, postComment, updateComment } from "./operations";
const initialState = {
  comments: [],
  isLoading: false,
  error: null,
};

const extraActions = [getComments, postComment, updateComment];

const getActions = (type) => extraActions.map((action) => action[type]);

const handlePending = (state) => {
  state.isLoading = true;
  state.error = null;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const handleFulfilled = (state) => {
  state.isLoading = false;
};

export const commentsSlice = createSlice({
  name: "comments",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getComments.fulfilled, (state, action) => {
        state.comments = action.payload;
      })
      .addCase(postComment.fulfilled, (state, action) => {
        state.comments = [...state.comments, action.payload];
      })
      .addCase(updateComment.fulfilled, (state, action) => {
        state.comments = state.comments.map((comment) =>
          comment.id === action.payload.id ? action.payload : comment
        );
      })
      .addMatcher(isAnyOf(...getActions("pending")), handlePending)
      .addMatcher(isAnyOf(...getActions("fulfilled")), handleFulfilled)
      .addMatcher(isAnyOf(...getActions("rejected")), handleRejected);
  },
});

export default commentsSlice.reducer;

//Selectors
