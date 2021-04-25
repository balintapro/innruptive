import React, { useState, useEffect, useRef } from "react";
import { Helmet } from "react-helmet";
import CookieConsent from "react-cookie-consent";

import ReactGA from 'react-ga';

import Menu from "./Components/Menu";
import Banner from "./Components/Banner";
import Router from "./Router";
import Footer from "./Components/Footer";

const App = () => {
	let location = window.location.href;

	const [color, setColor] = useState();
	const [colorRgb, setColorRgb] = useState();
	const [colorPair, setPair] = useState();
	const domRef = useRef(null);

	const green = "rgb(82, 216, 144, 0.2)";
	const blue = "rgb(94, 175, 168, 0.2)";
	const orange = "rgb(220, 112, 73, 0.2)";
	const white = "#fff";

	useEffect(() => {
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
      const { clientWidth: width } = domRef.current;
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

		domRef.current.addEventListener("mousemove", shadow);
		locationColor();
		ReactGA.pageview(window.location.pathname + window.location.search);
	}, [colorPair, colorRgb, location]);

	return (
		<div ref={domRef} className={color}>
			<Helmet>
				<title>innruptive - front-end solutions made with care and speed</title>
				<meta name="description" content="Front-end solutions made with care and speed. Portfolio and blog of Balint Apro, front-end developer from Budapest." />

				<meta property="og:type" content="website" />
				<meta property="og:url" content="https://innruptive.com" />
				<meta property="og:title" content="Innruptive" />
				<meta property="og:description" content="Front-end solutions made with care and speed. Portfolio and blog of Balint Apro, front-end developer from Budapest." />
				<meta property="og:image" content="" />

				<meta property="twitter:card" content="summary_large_image" />
				<meta property="twitter:url" content="https://innruptive.com" />
				<meta property="twitter:title" content="Innruptive" />
				<meta property="twitter:description" content="Front-end solutions made with care and speed. Portfolio and blog of Balint Apro, front-end developer from Budapest." />
				<meta property="twitter:image" content="" />

			</Helmet>
			<Menu />
			<Banner />
			<Router />
			<Footer />
			<CookieConsent
				buttonText="OKAY"
				cookieName="innruptive.com"
				style={{
					background: "#191919",
					borderTop: "1px solid #2f2f2f",
					fontSize: "14px",
					lineHeight: "16px"
				}}
				buttonStyle={{
					borderRadius: "3px",
					boxShadow: "none",
					cursor: "pointer",
					flex: "0 0 auto",
					margin: "4px",
					padding: "8px 16px",
					background: "#52d890",
					color: "#fffff",
					textAlign: "center",
					textTransform: "uppercase",
					border: "none",
					transition: "all 0.25s ease"
				}}
			>
				This site is using Google Analitics <a target="_blank" rel="noreferrer" style={{ color: "#52d890", textDecoration: "none" }} href="https://policies.google.com/privacy">Privacy Policy</a> and <a target="_blank" style={{ color: "#52d890", textDecoration: "none" }} href="https://policies.google.com/terms" rel="noreferrer">Terms of Service</a>.
      </CookieConsent>
		</div>
	);
};

export default App;
