import React, { useState, useEffect, Suspense } from "react";
import { Helmet } from "react-helmet";
import CookieConsent from "react-cookie-consent";
import ReactGA from 'react-ga';

import useDeviceDetect from "./Components/Helper/utils"

import Menu from "./Components/Menu";
import Animator from "./Animator";
import Footer from "./Components/Footer";

const TwitterContainer = React.lazy(() => import('./Components/Helper/twitter'));

const App = () => {
	let location = window.location.href;

	const { isMobile } = useDeviceDetect();

	const [color, setColor] = useState();
	const [colorRgb, setColorRgb] = useState();
	const [colorPair, setPair] = useState();

	const green = "rgb(82, 216, 144, 0.2)";
	const blue = "rgb(94, 175, 168, 0.2)";
	const white = "#fff";

	useEffect(() => {
		const locationColor = () => {
			if (
				location?.pathname?.includes("projects")
			) {
				setColor("white");
				setColorRgb(white);
				setPair(white);
			} else if (
				location?.pathname?.includes("blog")
			) {
				setColor("white");
				setColorRgb(white);
				setPair(blue);
			}
			else {
				setColor("white");
				setColorRgb(white);
				setPair(green);
			}
		};
		locationColor();
		ReactGA.pageview(window.location.pathname + window.location.search);
	}, [colorPair, colorRgb, location]);

	return (
		<div className={"grd " + color}>
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
			{isMobile ? (
				<>
					<Menu />
					<Animator isMobile={isMobile} />
				</>) : (
				<>
					<div className="morph">
						<div className="wrap">
							<Menu />
							<Footer />
						</div>
					</div>
					<Animator />
				</>)
			}
			{isMobile ? "" : (
				<div className="right-bar">
					<Suspense fallback={
						<div className="inner-cont">
							<div className="decor">
								<div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
							</div>
						</div>
					}>
						<TwitterContainer />
					</Suspense>
				</div>
			)}
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
