import React from "react";
import { Loader } from "../../components";
import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";
import { Outlet } from "react-router-dom";
import styles from "./Layout.module.css";
import { useSelector } from "react-redux";
import { selectLoading } from "../../redux/selectors";

export const Layout = () => {
	const loading = useSelector(selectLoading);

	return (
		<div className={styles.layout}>
			<Header />
			<main className={styles.main}>{<Outlet />}</main>
			<Footer />
			{loading && <Loader />}
		</div>
	);
};
