import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  filter: '',
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {},
});

export const {} = filterSlice.actions;

export default filterSlice.reducer;

//Selectors
