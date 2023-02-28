import React, { useMemo } from "react";

import { Comment } from "../Comment/Comment";
import { Grid } from "../Grid/Grid";

import { useGetCommentsQuery } from "../../redux/comments/commentApi";
import { useSelector } from "react-redux";
import { selectFilter } from "../../redux/filter/selectors";

export const Comments = () => {
  const filterValue = useSelector(selectFilter);
  const { data: comments } = useGetCommentsQuery();

  const filteredComments = useMemo(
    () =>
      comments?.filter(({ content }) =>
        content.toLowerCase().includes(filterValue.toLowerCase())
      ) ?? [],
    [comments, filterValue]
  );

  if (!filteredComments.length) return;

  return (
    <Grid>
      {filteredComments &&
        filteredComments.map((comment) => (
          <Comment key={comment.id} {...comment} />
        ))}
    </Grid>
  );
};
