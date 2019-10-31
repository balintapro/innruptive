import React, { useEffect } from "react";
import useColor from "../Hooks/useColor"

const Contact = () => {
	const [color] = useColor()

	useEffect(() => {
	}, [color]);

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
