import "babel-polyfill"

import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import {
	BrowserRouter as Router,
	Route,
	Switch
} from "react-router-dom";

import Menu from "./Menu";
import Banner from "./Banner";

import Intro from "./Pages/Intro";
import About from "./Pages/About";
import Blog from "./Pages/Blog";
import Photos from "./Pages/Photos";
import Contact from "./Pages/Contact";

import Footer from "./Footer";

const App = ({ location }) => {
	const [globalStyle, setGlobalStyle] = useState("green");
	const [loading, setLoading] = useState(true);


	const navigateTrack = () => {
		setLoading(true)
		let windowUrl = location
		if (windowUrl.includes("about")) {
			setGlobalStyle("yellow");
		} if (windowUrl.includes("contact")) {
			setGlobalStyle("blue");
		} if (windowUrl.includes("blog")) {
			setGlobalStyle("orange");
		} if (windowUrl.includes("photos")) {
			setGlobalStyle("black");
		}
		else {
			setGlobalStyle("green");
		}
		setLoading(false)
	}

	 	useEffect(() => {
			console.log('New path:', location);
			//navigateTrack();
		}, [location]); 

	return (
		<div>
			<Router>
				<Menu color={globalStyle} />
				<Banner color={globalStyle} />
				<Switch location={location}>
					<Route component={Intro} color={globalStyle} exact path="/" />
					<Route component={About} color={globalStyle} path="/about" />
					<Route component={Blog} color={globalStyle} path="/blog" />
					<Route component={Photos} color={globalStyle} path="/photos" />
					<Route component={Contact} color={globalStyle} path="/contact" />
				</Switch>
				<Footer color={globalStyle} />
			</Router>
		</div>
	);
};

ReactDOM.render(<App />, document.getElementById("root"));
