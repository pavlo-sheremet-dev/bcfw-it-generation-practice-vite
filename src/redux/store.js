import { configureStore } from "@reduxjs/toolkit";
import filterReducer from "./filter/filterSlice";
// import commentsReducer from "./comments/commentsSlice";

import { commentApi } from "./comments/commentApi";

export const store = configureStore({
  reducer: {
    filter: filterReducer,
    // comments: commentsReducer,
    [commentApi.reducerPath]: commentApi.reducer,
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(),
    commentApi.middleware,
  ],
});
