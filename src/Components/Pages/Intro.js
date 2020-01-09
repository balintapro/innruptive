import React from "react";
import axios from "axios"

const Intro = props => {
	const { color } = props;

	return (
		<section className={color}>
			<div className="intro">
				<h1>innruptive</h1>
				<p className="sub">Front-end solutions made with care and speed</p>
				<p>I`m Balint, a front-end guy based at Budapest, Hungary. Nice to have you here. This site is a collection of some stuff I do and love.</p>
			</div>
		</section>
	);
};

export default Intro;
