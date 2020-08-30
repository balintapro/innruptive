import React, { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";

import Menu from "./Components/Menu";
import Banner from "./Components/Banner";
import Router from "./Router";
import Footer from "./Components/Footer";


const App = () => {
	let location = useLocation();

	const [color, setColor] = useState();
	const [colorRgb, setColorRgb] = useState();
	const [colorPair, setPair] = useState();
	const domRef = useRef(null);

	const green = "rgb(82, 216, 144, 0.2)";
	const blue = "rgb(94, 175, 168, 0.2)";
	const yellow = "rgb(245, 198, 93, 0.2)";
	const orange = "rgb(220, 112, 73, 0.2)";
	const red = "rgb(160, 32, 64, 0.2)";
	const black = "rgb(25, 25, 25)";
	const white = "#fff";

	const locationColor = () => {
		if (
			location &&
			location.pathname &&
			location.pathname.includes("projects")
		) {
			setColor("white");
			setColorRgb(white);
			setPair(white);
		} else if (
			location &&
			location.pathname &&
			location.pathname.includes("blog")
		) {
			setColor("white");
			setColorRgb(white);
			setPair(blue);
		} else if (
			location &&
			location.pathname &&
			location.pathname.includes("photos")
		) {
			setColor("white");
			setColorRgb(white);
			setPair(orange);
		} else {
			setColor("white");
			setColorRgb(white);
			setPair(green);
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
		inset ${-50 + xMovement * 2}px ${yMovement * 1}px 0 ${colorPair},
		inset ${350 + xMovement * 2}px ${yMovement * -1}px 0 ${colorRgb},
		inset ${-50 + xMovement * 2}px ${yMovement * -3}px 0 ${colorPair}
		`;
	};

	useEffect(() => {
		domRef.current.addEventListener("mousemove", shadow);
		locationColor();
	}, [location, color, colorRgb, colorPair]);

	return (
		<div ref={domRef} className={color}>
			<Helmet>
				<title>innruptive - front-end solutions made with care and speed</title>
				<meta name="description" content="Front-end solutions made with care and speed. Portfolio and blog of Balint Apro, front-end developer from Budapest." />
			</Helmet>
			<Menu />
			<Banner />
			<Router />
			<Footer />
		</div>
	);
};

export default App;
