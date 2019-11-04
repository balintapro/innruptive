import React from "react";

const Contact = props => {
	const { color } = props;

	return (
		<section className={color}>
			<div className="intro">
				<h2>Conact</h2>
				<p>
					Brief intro should be here, but I was busy working on something
					else...
				</p>
			</div>
		</section>
	);
};

export default Contact;
