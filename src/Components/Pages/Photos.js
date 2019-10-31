import React, { useEffect } from "react";
import useColor from "../Hooks/useColor"

const Photos = () => {
	const [color] = useColor()

	useEffect(() => {
	}, [color]);

	return (
		<section className={color}>
			<div className="intro">
				<h2>Photos</h2>
				<p>
					Brief intro should be here, but I was busy working on something
					else...
				</p>
			</div>
		</section>
	);
};

export default Photos;
