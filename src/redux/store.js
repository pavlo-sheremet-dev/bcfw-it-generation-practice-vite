import { configureStore } from "@reduxjs/toolkit";
import filterReducer from "./filterSlice";
import commentsReducer from "./commentsSlice";

// import { commentApi } from './commentApi';

export const store = configureStore({
	reducer: {
		filter: filterReducer,
		comments: commentsReducer,
		// [commentApi.reducerPath]: commentApi.reducer,
	},
	// middleware: (getDefaultMiddleware) => [
	//   ...getDefaultMiddleware(),
	//   commentApi.middleware,
	// ],
});
