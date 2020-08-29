import React from "react";

const Intro = props => {
	const { color } = props;

	return (
		<section className={color}>
			<div className="wrap">
				<h1>404</h1>
				<p className="sub">Page not found.</p>
				<p>Move along, nothing to see here.</p>
			</div>
		</section>
	);
};

export default Intro;
