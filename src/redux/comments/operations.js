import { createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../../helpers/comments-api";

export const getComments = createAsyncThunk(
  "comments/getComments",
  async (_, thunkApi) => {
    try {
      const comments = await api.fetchComments();
      return comments;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const postComment = createAsyncThunk(
  "comments/postComment",
  async (comment, thunkApi) => {
    try {
      const data = await api.postComment(comment);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const updateComment = createAsyncThunk(
  "comments/updateComment",
  async (counter, thunkApi) => {
    try {
      const data = await api.updateComment(counter);
      return data;
    } catch (error) {
      console.log(error);
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
