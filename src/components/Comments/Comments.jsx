import React from "react";
import PropTypes from "prop-types";
import { Comment } from "../Comment/Comment";
import { Grid } from "../Grid/Grid";
// import { comments } from "../../helpers/comments";
import { useSelector } from "react-redux";
import { selectComments } from "../../redux/selectors";

export const Comments = () => {
	const comments = useSelector(selectComments);

	if (!comments.length) return;
	return (
		<Grid>{comments && comments.map((comment) => <Comment key={comment.id} {...comment} />)}</Grid>
	);
};

Comments.propTypes = {
	comments: PropTypes.arrayOf(PropTypes.shape().isRequired),
};
