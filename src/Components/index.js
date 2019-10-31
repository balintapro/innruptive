import "babel-polyfill"

import React from "react";
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
	return (
		<div>
			<Router>
				<Menu />
				<Banner />
				<Switch location={location}>
					<Route component={Intro} exact path="/" />
					<Route component={About} path="/about" />
					<Route component={Blog} path="/blog" />
					<Route component={Photos} path="/photos" />
					<Route component={Contact} path="/contact" />
				</Switch>
				<Footer />
			</Router>
		</div>
	);
};

ReactDOM.render(<App />, document.getElementById("root"));
