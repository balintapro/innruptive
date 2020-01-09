import React from "react";

const About = props => {
	const { color } = props;

	return (
		<section className={color}>
			<div className="intro">
				<h2>Projects</h2>
				<p>
					I was a little busier than normal in the last few months. Some
					interesting projects will be described here in detail.
				</p>
			</div>
		</section>
	);
};

export default About;
