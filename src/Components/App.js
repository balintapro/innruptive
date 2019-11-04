import "babel-polyfill";

import React, { useState, useEffect, useRef } from "react";
import { Route, useLocation } from "react-router-dom";

import Menu from "./Menu";
import Banner from "./Banner";

import Intro from "./Pages/Intro";
import About from "./Pages/About";
import Blog from "./Pages/Blog";
import Photos from "./Pages/Photos";
import Contact from "./Pages/Contact";

import Footer from "./Footer";

const App = () => {
	let location = useLocation();

	const [color, setColor] = useState();
	const [colorRgb, setColorRgb] = useState();
	const [colorPair, setPair] = useState();
	const domRef = useRef(null);

	//	$green: rgb(82, 216, 144);
	//	$blue: rgb(94, 175, 168);
	//	$yellow: rgb(245, 198, 93);
	//	$orange: rgb(220, 112, 73);
	//	$red: rgb(160, 32, 64);

	const locationColor = () => {
		if (location && location.pathname && location.pathname.includes("about")) {
			setColor("yellow");
			setColorRgb("rgb(245, 198, 93)");
			setPair("rgb(94, 175, 168)"); // blue
		} else if (
			location &&
			location.pathname &&
			location.pathname.includes("contact")
		) {
			setColor("blue");
			setColorRgb("rgb(94, 175, 168)");
			setPair("rgb(245, 198, 93)"); // yellow
		} else if (
			location &&
			location.pathname &&
			location.pathname.includes("blog")
		) {
			setColor("orange");
			setColorRgb("rgb(220, 112, 73)");
			setPair("rgb(82, 216, 144)"); //green
		} else if (
			location &&
			location.pathname &&
			location.pathname.includes("photos")
		) {
			setColor("black");
			setColorRgb("rgb(25, 25, 25)");
			setPair("rgb(160, 32, 64)"); //red
		} else {
			setColor("green");
			setColorRgb("rgb(82, 216, 144)");
			setPair("rgb(94, 175, 168)"); //blue
		}
	};

	const shadow = e => {
		const movement = 200;
		const { clientWidth: width, clientHeight: height } = domRef.current;
		let { offsetX: x, offsetY: y } = e;

		if (this !== e.target) {
			x = x + e.target.offsetLeft;
			y = y + e.target.offsetTop;
		}
		const xMovement = Math.round((x / width) * movement - movement / 2);
		const yMovement = Math.round((y / width) * movement - movement / 2);

		domRef.current.style.boxShadow = `
		inset ${-50 + xMovement * 2}px ${yMovement * 1}px 0 ${colorRgb},
		inset ${-50 + xMovement * 2}px ${100+ yMovement * 2}px 0 ${colorPair},
		inset ${-50 + xMovement * 2}px ${yMovement * -1}px 0 ${colorRgb},
		inset ${-50 + xMovement * 2}px ${yMovement * -3}px 0 ${colorPair}
		`;
	};

	useEffect(() => {
		domRef.current.addEventListener("mousemove", shadow);
		locationColor();
	}, [location, color]);

	return (
		<div id="shadow" ref={domRef} className={color}>
			<Menu />
			<Banner />
			<Route component={Intro} exact path="/" />
			<Route component={About} path="/about" />
			<Route component={Blog} path="/blog" />
			<Route component={Photos} path="/photos" />
			<Route component={Contact} path="/contact" />
			<Footer />
		</div>
	);
};

export default App;
