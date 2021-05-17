import React from "react";

import { Helmet } from "react-helmet";

const Intro = props => {
	const { color } = props;

	return (
		<section className={color}>
			<Helmet>
				<meta property="og:type" content="website" />
				<meta property="og:url" content="https://innruptive.com" />
				<meta property="og:title" content="404 - Innruptive" />
			</Helmet>
			<div className="wrap">
				<h1>404</h1>
				<p className="sub">Page not found.</p>
				<p>Move along, nothing to see here.</p>
			</div>
		</section>
	);
};

export default Intro;
