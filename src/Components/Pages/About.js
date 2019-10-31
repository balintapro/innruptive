import React from "react";

// TODO: make background image configurable from ENV file

const About = props => {
	const { color } = props;
	return (
		<section className={color}>
			<div className="intro">
				<h2>About</h2>
				<p>
					Brief intro should be here, but I was busy working on something
					else...
				</p>
			</div>
		</section>
	);
};

export default About;
