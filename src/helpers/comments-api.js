import axios from "axios";

axios.defaults.baseURL = "https://6393b5f2ab513e12c514f63c.mockapi.io/api";

export const fetchComments = async () => {
	const { data } = await axios.get("/comments");
	return data;
};

export const postComment = async (comment) => {
	const { data } = await axios.post("/comments", comment);
	return data;
};

export const updateComment = async (comment) => {
	const { data } = await axios.put(`/comments/${comment.id}`, comment);
	return data;
};
