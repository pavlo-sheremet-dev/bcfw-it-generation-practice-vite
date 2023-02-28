import { createSelector } from "@reduxjs/toolkit";
import { selectComments } from "./comments/selectors";
import { selectFilter } from "./filter/selectors";

export const selectFilteredComments = createSelector(
  [selectComments, selectFilter],
  (comments, filterValue) => {
    return comments.filter(({ content }) =>
      content.toLowerCase().includes(filterValue.toLowerCase())
    );
  }
);

export const selectFilteredComments2 = (state) => {
  const comments = selectComments(state);
  const filterValue = selectFilter(state);

  return comments.filter(({ content }) => {
    return content.toLowerCase().includes(filterValue.toLowerCase());
  });
};
