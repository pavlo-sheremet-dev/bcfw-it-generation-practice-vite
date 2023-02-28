import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "",
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    changeFilter: (state, { payload }) => {
      state.value = payload;
    },
  },
});

export const { changeFilter } = filterSlice.actions;

export default filterSlice.reducer;

//Selectors
