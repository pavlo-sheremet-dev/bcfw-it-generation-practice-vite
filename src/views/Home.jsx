import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Comments, Hero, Loader, Section } from "../components";
import { getComments } from "../redux/operations";

export const Home = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getComments());
	}, [dispatch]);

	return (
		<>
			<Section>
				<Hero title="What people are saying." subtitle="Feedback from our customers." />
				<Comments />
			</Section>
		</>
	);
};
